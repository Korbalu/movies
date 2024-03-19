import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListsComponent} from "./components/movie-lists/movie-lists.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes: Routes = [
  {path:"movie-lists", component: MovieListsComponent},
  {path:"movie-details/:id", component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
