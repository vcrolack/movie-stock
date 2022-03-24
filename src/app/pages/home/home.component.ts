import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faCompactDisc,
  IconDefinition,
  faShippingFast,
  faSignal,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffe: IconDefinition = faCoffee;
  faCompactDisc: IconDefinition = faCompactDisc;
  faShippingFast: IconDefinition = faShippingFast;
  faSignal: IconDefinition = faSignal;
  faVideo: IconDefinition = faVideo;
  popularMovies!: any;
  moviesArray!: any[];
  onDestroy$ = new Subject<any>();

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMoviesApi().pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      this.popularMovies = data;
      this.moviesArray = this.popularMovies.results;
      this.popularMovies.results.splice(4, 20)
    })
  }



}
