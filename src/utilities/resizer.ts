import express from 'express';
import { promises as fsPromises } from 'fs';
import imageproc from './imageproc';
import imageretriever from './imageretriever';
import path from 'path';

async function resizer (req: express.Request, res: express.Response, next: Function) {
  try {
    const imageName: string = req.query.filename as string;
    const imageHeight: number = parseInt(req.query.height as string, 10);
    const imageWidth: number = parseInt(req.query.width as string, 10);
    res.locals.filename = req.query.filename as string;
    res.locals.height = (req.query.height as unknown) as number;
    res.locals.width = (req.query.width as unknown) as number;
    const fileOpen = await fsPromises.open(path.join(__dirname, `/../../public/assets/thumb/${imageName}_thumb.jpg`), 'r')
      .catch(async (error) => {
        if (error) {
          await imageproc(imageName, imageHeight, imageWidth);
          console.log('Image resized');
        }
      });
    await fileOpen?.close();
  } catch (error) {
    console.log('Image processing error');
  }
  next();
}

async function displayer (req: express.Request, res: express.Response) {
  try {
    const imageWidth: (number|string|undefined) = req.query.width as string;
    const imageHeight: (number|string|undefined) = req.query.height as string;
    const getImage: { height: (number|undefined), width: (number|undefined) } = await imageretriever(req.query.filename as string);

    if (getImage.width === parseInt(imageWidth, 10) && getImage.height === parseInt(imageHeight, 10)) {
      await res.sendFile(`${req.query.filename}_thumb.jpg`, { root: './public/assets/thumb/' });
    } else {
      res.send('Error finding image, invalid parameter.');
    }
  } catch (error) {
    res.send('Error finding image, file does not exist or invalid parameter.');
  }
}

export {
  resizer,
  displayer
};
