import { Injectable } from '@angular/core';
import Movie from 'src/models/movie.interface';
import {default as movies} from '../../db/data.json';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  catalogue!: Movie[];

  constructor() {
  }

  getMovies() {
    this.catalogue = movies.catalogue;
    return this.catalogue;
  }

  
}
