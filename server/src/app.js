import express from 'express';
import tmdbService from './services/tmdb.js';
import authenticateTmdbApi from './middlewares/authenticate.js';


const app = express();
const port = 3000;

app.get('/movies/playing', (req, res) => {
  const tmdbServiceInstance = new tmdbService();
  try {
    tmdbServiceInstance.getPlayingMovies().then(e => res.json(e));
  } catch (err) {
    console.log(err)
    res.status(500).json({"message": `An exception occurred fetching movies/playing ${err}`});
  }
})

app.get('/movies/popular', (req, res) => {
  const tmdbServiceInstance = new tmdbService();
  try {
    tmdbServiceInstance.getPopularMovies().then(e => res.json(e));
  } catch (err) {
    console.log(err)
    res.status(500).json({"message": `An exception occurred fetching movies/popular ${err}`});
  }
})

app.get('/movies/upcoming', (req, res) => {
  const tmdbServiceInstance = new tmdbService();
  try {
    tmdbServiceInstance.getUpcomingMovies().then(e => res.json(e));
  } catch (err) {
    console.log(err)
    res.status(500).json({"message": `An exception occurred fetching movies/upcoming ${err}`});
  }
})

app.get('/movies/top', (req, res) => {
  const tmdbServiceInstance = new tmdbService();
  try {
    tmdbServiceInstance.getTopRatedMovies().then(e => res.json(e));
  } catch (err) {
    console.log(err)
    res.status(500).json({"message": `An exception occurred fetching movies/top_rated ${err}`});
  }
})

app.listen(port, () => {
  authenticateTmdbApi();
  console.log(`App Listening on port ${port}`);
})
