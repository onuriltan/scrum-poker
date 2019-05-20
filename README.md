To Install dependencies 
* Go to root folder and run `npm install`
* Go to client folder and run `npm install`

### Development
* Go to root folder and create an .env file
* Inside env file set front-end url as `FRONTEND_URL=http://localhost:3000`
* To run Vue client, go to client folder and run `npm run serve` 
* To run Express server, go to root folder and run `npm run dev` 

### Production
To run the Express server and serve public distribution folder, 
* Go to root folder and create an .env file
* Inside env file set front-end url as `FRONTEND_URL=http://localhost:5000`
* Go to client folder and run `npm run build` to create a dist folder inside server folder.
* To run the Express server and serve the dist folder, go to root folder and run `npm run start`.
