import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieModel} from "../models/movie-model";
import {Observable} from "rxjs";
import {MovieDetails} from "../models/movie-details";


const BASE_URL = "http://localhost:8080/api/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

  }

  topRatedLister(): Observable<Array<MovieModel>> {
    return this.http.get<Array<MovieModel>>(BASE_URL + "/topRated")
  }
  popularLister(): Observable<Array<MovieModel>> {
    return this.http.get<Array<MovieModel>>(BASE_URL + "/popular")
  }
  nowPlayedLister(): Observable<Array<MovieModel>> {
    return this.http.get<Array<MovieModel>>(BASE_URL + "/nowPlaying")
  }
  movieDetailer(title: string):Observable<any>{
    return this.http.get<MovieDetails>(BASE_URL + "/search/" + title)
  }
  movieDetailerById(id: number):Observable<any>{
    return this.http.get<MovieDetails>(BASE_URL + "/searchId/" + id)
  }
}
