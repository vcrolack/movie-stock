import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { ContactModule } from './pages/contact/contact.module';
import { MoviesModule } from './pages/movies/movies.module';
import { RegisterModule } from './pages/register/register.module';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { MovieModule } from './pages/movie/movie.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    ContactModule,
    MoviesModule,
    RegisterModule,
    ComponentsModule,
    LayoutModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
