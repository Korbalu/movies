import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/movie-model";

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css']
})
export class MovieListsComponent {

  movies: Array<MovieModel> = [];
  isTopRatedVisible = false;

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.movieLister().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Movies listed."); //delete later-----------------------------------------------------
      }
    })
  }


  topRatedLister() {
    this.isTopRatedVisible = !this.isTopRatedVisible;
  }
}
