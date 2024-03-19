import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {MovieModel} from "../../models/movie-model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  randomFilms: Array<string> = ["Damsel", "Down Periscope", "Dumb and Dumber"];

  constructor(private movieService: MovieService, private router: Router) {

  }

  randomChooser() {
    let exampleMovie: MovieModel;
    let randomNumber = Math.floor(Math.random() * 3);
    this.movieService.movieDetailer(this.randomFilms[randomNumber]).subscribe({
      next: (data) => {
        exampleMovie = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.router.navigate(["/movie-details/", exampleMovie.id])
      }
    })
  }
}
