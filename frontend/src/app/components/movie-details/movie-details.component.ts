import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieDetails} from "../../models/movie-details";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movieDetails = {
    id: 0,
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
    original_language: "",
    popularity: 0,
    vote_average: 0
  };
  movieId:number = 0;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params['id'];
    })
    this.movieDetailer(this.movieId);
  }

  movieDetailer(id: number) {
    this.movieService.movieDetailerById(id).subscribe({
      next: (data) => {
        this.movieDetails = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
      }
    })
  }

  goBack() {
    this.router.navigate(["/movie-lists"])
  }
}
