import { config } from "dotenv";
config();

const BASE_URL = 'https://api.themoviedb.org/3'

export default class tmdbService {
  constructor(api_key = process.env.API_KEY) {
    if (!api_key) throw new Error("No Valid API Key");
    this.api_key = api_key;
  };

  async request(endpoint, options = {}) {
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${this.api_key}`,
      ...options.headers
    }
    
    const response = await fetch(BASE_URL+endpoint, {...options, headers});
    if (!response.ok) throw Error(`Response not okay ${response.status}: ${response.statusText}`);
    
    return response.json();
  }

  async getPlayingMovies() {
    return this.request('/movie/now_playing');
  }

  async getPopularMovies() {
    return this.request('/movie/popular');
  }
  
  async getTopRatedMovies() {
    return this.request('/movie/top_rated');
  }
  
  async getUpcomingMovies() {
    return this.request('/movie/upcoming');
  }
  
}

