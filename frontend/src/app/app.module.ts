import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MovieListsComponent} from './components/movie-lists/movie-lists.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListsComponent,
    MovieDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
