import express from 'express';
import authenticateTmdbApi from './middlewares/authenticate.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
})

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
  authenticateTmdbApi();
})
