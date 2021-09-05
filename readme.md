Image Processor v1.0.0

An application that can be used to resize and crop image files.

How to use :

- Unzip ImageProcessor.zip file
- Use terminal and go to folder on the terminal (cd foldername)
- Run `npm install` to install all the dependencies
- Run `npm run start` to start the application
- Open a browser and go to http://localhost:3000/

How to resize an image :

- Place an image in /public/assets/full
- Open http://localhost:3000/api/images?filename=filename?width=image_widthheight=image_height
- A thumbnail will be generated inside /public/assets/thumb
- All the generated thumbnails can be accessed using the same link 

`npm run` tasks :

- `npm run build`     : Transpile Typescript source files to JavaScript and build the app.
- `npm run start`     : Run nodemon and starts the application.
- `npm run lint`      : Perform linting.
- `npm run prettier`  : Format codes. 
- `npm run test`      : Build the application and run tests with Jasmine.