import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import Movie from 'src/models/movie.interface';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  faPlus: IconDefinition = faPlus;

  movies!: Movie[];
  cart: Object[] = [];

  constructor(
    private moviesService: MoviesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies()
  }

  addCart(id: number): void  {
    let movieAdded: Movie[];
    if (this.movies) {
      movieAdded = this.movies.filter(movie => movie.id === id);
      this.cart.push(movieAdded[0]);
      this.cartService.postData(this.cart);
    }
  }

}
