import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './services/auth/auth.component';
import { MoviesComponent } from './services/movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    MovieListComponent,
    SingleMovieComponent,
    HeaderComponent,
    AuthComponent,
    MoviesComponent,
    MovieFormComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
