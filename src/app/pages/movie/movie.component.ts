import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { takeUntil, Subject } from 'rxjs';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  onDestroy$ = new Subject<any>();
  movie!: any;

  constructor(
    private moviesService: MoviesService,
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.moviesService.getMovie(id).pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      this.movie = data;
      console.log(this.movie)
    })
  }

}
