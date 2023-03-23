import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';


const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'movies', component: MovieListComponent},
  { path: 'movies/new', component:MovieFormComponent},
  { path: 'movie/view/:id', component:SingleMovieComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
