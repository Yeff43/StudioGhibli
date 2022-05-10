import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {NavbarComponent} from "./componentes/navbar/navbar.component";
import {MoviesComponent} from "./componentes/movies/movies.component";
import {MovieComponent} from "./componentes/movie/movie.component";

const routes: Routes = [
  {path: 'navbar',
    pathMatch:'full',//Esto compara el nombre completo de la ruta
    component: NavbarComponent
  },
  {path: 'home',
    pathMatch:'full',//Esto compara el nombre completo de la ruta
    component: HomeComponent
  },
  {
    path: 'movies', //Le paso un parametro, que será un id
    pathMatch: 'full',
    component: MoviesComponent
  },
  {
    path: 'movie/:id', //Le paso un parametro, que será un id
    pathMatch: 'full',
    component: MovieComponent
  },
  //LOS DE DEFAULT(Vacio) Y ERROR AL ULTIMO
  {//Componente Vacio, establece cual es la pagina a cargar por defecto
    path: '',
    component: HomeComponent
  },
  {//Para redirigir cuando hay un error, lo ideal es redigir a una pagina que diga que hay error
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
