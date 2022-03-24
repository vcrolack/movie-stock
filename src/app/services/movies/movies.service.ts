import { Injectable } from '@angular/core';
import Movie from 'src/models/movie.interface';
import {default as movies} from '../../db/data.json';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  catalogue!: Movie[];
  popularMoviesPopular!: any;

  constructor(private http: HttpClient) {
  }

  getMovies() {
    this.catalogue = movies.catalogue;
    return this.catalogue;
  }

  getPopularMoviesApi() {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=fb32c62dd95ebb187721b9d0195641c3&language=es&page=1`;
    return this.http.get(URL);
  }

  getMovie(id: number) {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=fb32c62dd95ebb187721b9d0195641c3&language=es`;
    return this.http.get(URL);
  }

}
