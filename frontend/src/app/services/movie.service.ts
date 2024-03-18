import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieModel} from "../models/movie-model";
import {Observable} from "rxjs";


const BASE_URL = "http://localhost:8080/api/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

  }

  movieLister(): Observable<Array<MovieModel>> {
    return this.http.get<Array<MovieModel>>(BASE_URL + "/topRated")
  }
}
