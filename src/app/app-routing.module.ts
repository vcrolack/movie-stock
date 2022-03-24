import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'iniciar-sesion', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'registro', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
  {path: 'peliculas', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)},
  {path: 'contacto', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  {path: 'movie/:id', loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
