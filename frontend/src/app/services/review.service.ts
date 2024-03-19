import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReviewModel} from "../models/review-model";
import {Observable} from "rxjs";

const BASE_URL = "http://localhost:8080/api/reviews";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {

  }

  reviewCreator(review: ReviewModel): Observable<any> {
    console.log(review)
    return this.http.post<ReviewModel>(BASE_URL + "/newReview", review)
  }
}
