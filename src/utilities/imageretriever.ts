import sharp from 'sharp';
import path from 'path';

async function imageretriever (filename: string): Promise<{ height: (number|undefined), width: (number|undefined) }> {
  let imageHeight: (number|undefined);
  let imageWidth: (number|undefined);
  await sharp(path.join(__dirname, `/../../public/assets/thumb/${filename}_thumb.jpg`)).metadata().then(info => {
    imageHeight = info.height as number;
    imageWidth = info.width as number;
  });
  return Promise.resolve({ width: imageWidth, height: imageHeight });
}

export default imageretriever;
