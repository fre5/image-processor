import sharp from 'sharp';
import path from 'path';

async function imageproc (filename: string, imageHeight: number, imageWidth: number): Promise<{ format: string, height: number, width: number, channels: number, premultiplied: boolean, size: number }> {
  const inputImage: string = path.join(__dirname, `/../../public/assets/full/${filename}.jpg`);
  const outputImage: { format: string, height: number, width: number, channels: number, premultiplied: boolean, size: number } = await sharp(inputImage)
    .resize(imageWidth, imageHeight)
    .toFile(path.join(__dirname, `/../../public/assets/thumb/${filename}_thumb.jpg`));
  return Promise.resolve(outputImage);
}

export default imageproc;
