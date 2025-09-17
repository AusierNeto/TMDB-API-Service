import {config} from 'dotenv';
config()

function authenticateTmdbApi() {
  const url = 'https://api.themoviedb.org/3/authentication';
  const API_KEY = process.env.API_KEY;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

export default authenticateTmdbApi;
