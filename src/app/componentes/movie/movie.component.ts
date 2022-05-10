import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie | any;

  constructor(private activatedRoute: ActivatedRoute,private moviesService: MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData(): void{
    //El snapshot coge la url al momento que llega de primera instancia y querremos los "params"
    const parametroURL = this.activatedRoute.snapshot.params;
    console.log('PARAMETROS', parametroURL); // Esto ayuda para saber si el error es que no esta buscando los
                                              // parametros o si los encuentra el error esta en lo que se hace con ello.
    //Le paso a personaje.service.getpersonaje la id que esta en parametroURL
    this.moviesService.getMovie(parametroURL['id']).subscribe((data: any) => {this.movie = data as Movie});
    console.log('Personaje', this.movie);
  }

  cambiarMovie(id: number) {
    if(id > 0 && id <200){
      this.router.navigateByUrl('film/'+ id).then( () => this.loadData())
    }
  }

}
