import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string = 'https://ghibliapi.herokuapp.com/films/'

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url);
  }

  getMovie(id:number) {
    return this.http.get(this.url + '/' + id);
  }
}
