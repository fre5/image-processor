import express from 'express';
import api from './routes/api/index';

const app = express();
const port = 3000;
const log = require('debug')('http');

app.listen(port, () => log(`Listening to port ${port}`));

app.use('/api', api);

app.get('/', (req, res) => {
  const tutorial: string = `<h1>Image Processor v1.0.0 </h1>
  <h2>How to resize an image: </h2>
  <h3>- Place an image in /public/assets/full </h3>
  <h3>- Open http://localhost:3000/api/images?filename=filename?width=image_width?height=image_height </h3> 
  <h3>&nbsp Example : http://localhost:3000/api/images?filename=santamonica?width=200?height=200 </h3>
  <h3>- A thumbnail will be generated inside /public/assets/thumb </h3>
  <h3>- All the generated thumbnails can be accessed using the same link.</h3>`;
  res.send(tutorial);
});

export default app;
