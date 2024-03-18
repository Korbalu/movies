import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListsComponent} from "./components/movie-lists/movie-lists.component";

const routes: Routes = [
  {path:"movie-lists", component: MovieListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
