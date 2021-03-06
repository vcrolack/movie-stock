import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';



@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule
  ],
  exports: [MovieComponent, MovieRoutingModule]
})
export class MovieModule { }
