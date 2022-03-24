import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [MoviesComponent, MoviesRoutingModule]
})
export class MoviesModule { }
