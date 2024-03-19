import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReviewModel} from "../models/review-model";
import {Observable} from "rxjs";
import {ReviewListModel} from "../models/review-list-model";

const BASE_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {

  }

  reviewCreator(review: ReviewModel): Observable<any> {
    return this.http.post<ReviewModel>(BASE_URL + "/reviews/newReview", review)
  }

  reviewLister(id: number): Observable<any> {
    return this.http.get<Array<ReviewListModel>>(BASE_URL + "/movie/searchReview/" + id);
  }
}
