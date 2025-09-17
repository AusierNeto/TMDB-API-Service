import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import authenticateTmdbApi from './middlewares/authenticate.js';
import tmdbService from './services/tmdb.js';

const app = express();
const port = 3000;

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // Specify the OpenAPI version
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'A sample API for demonstration purposes',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Your API server URL
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./app.js'], // Path to the API docs (e.g., routes, models)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get('/movies/playing', (req, res) => {
  const tmdbServiceInstance = new tmdbService();
  try {
    const response = tmdbServiceInstance.request("/movie/now_playing");
    response.then(e => res.json(e));
  } catch (err) {
    console.log(err)
    res.status(500).json({"message": `An exception occurred fetching movies/playing ${err}`});
  }
})

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
})
