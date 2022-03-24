import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [HomeComponent, HomeRoutingModule],
  providers: [MoviesService]
})
export class HomeModule { }
