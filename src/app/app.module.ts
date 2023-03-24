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
import { AppRoutingModule } from './app-routing.module';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
import { AuthGuardService } from './services/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    MovieListComponent,
    SingleMovieComponent,
    HeaderComponent,
    MovieFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    MoviesService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
