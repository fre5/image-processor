import app from '../index';
import supertest from 'supertest';
import imageproc from '../utilities/imageproc';

const request = supertest(app);

describe('Gets the API endpoint status', () => {
  it('Checks for valid endpoint value with parameters', async () => {
    const response = await request.get('/api/images?filename=fjord&width=200&height=200');
    expect(response.status).toBe(200);
  });

  it('Checks for 404 status on endpoint with no parameters', async () => {
    const response = await request.get('/api/images');
    const htmlText: string = response.text;
    expect(htmlText).toBe('Error finding image, file does not exist or invalid parameter.');
  });

  it('Checks status on endpoint with invalid height and width parameters', async () => {
    const response = await request.get('/api/images?filename=fjord&width=300&height=500');
    expect(response.text).toBe('Error finding image, invalid parameter.');
  });

  it('Checks status on endpoint with invalid filename', async () => {
    const response = await request.get('/api/images?filename=random&width=200&height=200');
    expect(response.text).toBe('Error finding image, file does not exist or invalid parameter.');
  });
});

describe('Checks the image processor working properly', () => {
  it('Checks if the image processor returns the correct value', async () => {
    const imageProc: { format: string, width: number, height: number, channels: number, premultiplied: boolean, size: number } = await imageproc('fjord', 200, 200);
    expect(imageProc).toEqual({ format: 'jpeg', width: 200, height: 200, channels: 3, premultiplied: false, size: 6977 });
  });
});
