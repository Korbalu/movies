import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReviewService} from "../../services/review.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReviewModel} from "../../models/review-model";
import {ReviewListModel} from "../../models/review-list-model";
import {DatePipe} from "@angular/common";


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
  movieId: number = 0;
  reviewForm!: FormGroup;
  reviews: Array<ReviewListModel> = [];

  constructor(private movieService: MovieService, private reviewService: ReviewService,
              private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.reviewForm = this.formBuilder.group({
      reviewAuthor: ['', Validators.required],
      reviewText: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params['id'];
    })
    this.movieDetailer(this.movieId);
    this.reviewLister()
  }

  reviewLister() {
    this.reviewService.reviewLister(this.movieId).subscribe({
      next: (data) => {
        this.reviews = data;
        for (const review of this.reviews) {
          // @ts-ignore
          const [year, month, day, hour, minute, second] = review.createdAt;
          const createdAtDate = new Date(year, month - 1, day, hour, minute, second);
          const datePipe = new DatePipe('en-US');
          // @ts-ignore
          review.createdAt = datePipe.transform(createdAtDate, 'yyyy/MM/dd HH:mm:ss');
        }
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
      }
    })
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

  submit() {
    let data: ReviewModel = {usersMail: '', reviewText: '', movieId: 0};
    data.movieId = this.movieId;
    data.reviewText = this.reviewForm.value.reviewText;
    data.usersMail = this.reviewForm.value.reviewAuthor;
    this.reviewService.reviewCreator(data).subscribe({
      next: () => {
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.reviewForm.reset();
        this.reviewLister();
      }
    })
  }

  goBack() {
    this.router.navigate(["/movie-lists"])
  }
}
