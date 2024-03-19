import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/movie-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css']
})
export class MovieListsComponent {

  topRatedMovies: Array<MovieModel> = [];
  popularMovies: Array<MovieModel> = [];
  isTopRatedVisible = false;
  isPopularVisible = false;

  constructor(private movieService: MovieService, private router: Router) {

  }

  ngOnInit() {
    this.movieService.topRatedLister().subscribe({
      next: (data) => {
        this.topRatedMovies = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
      }
    })
    this.movieService.popularLister().subscribe({
      next: (data) => {
        this.popularMovies = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
      }
    })
  }

  topRatedLister() {
    this.isTopRatedVisible = !this.isTopRatedVisible;
    if (this.isPopularVisible){
      this.isPopularVisible = !this.isPopularVisible;
    }
  }
  popularLister() {
    this.isPopularVisible = !this.isPopularVisible;
    if (this.isTopRatedVisible){
      this.isTopRatedVisible = !this.isTopRatedVisible;
    }
  }

  detailer(id: number) {
    this.router.navigate(["/movie-details/", id])
  }
}
