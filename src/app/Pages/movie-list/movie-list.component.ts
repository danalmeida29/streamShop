import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Core/event.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieId: any;
  sessionMovie: any;
  theatersMovie: any;
  Erro: any;

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.movieId = localStorage.getItem('movieId');
    this.getMovie();
    this.getTheaters();
  }

  /**
   * Metodo que obtem todos os dados relacionados ao filme escolhido
   * Ex: Nome, Imagem.
   */
   getMovie(){
    this.eventService.getMovieId(this.movieId).subscribe(
      (res: any) =>
      {
        this.sessionMovie = res;
        console.log(this.sessionMovie)
      },
      (error: any) => {
        this.Erro = error;
      }
    )
  }

  /**
   * Metodo que obtem os dados dos cinemas que exebiram o filme selecionado
   * Sessão, Sala, Horário.
  */
   getTheaters(){
    this.eventService.getTheatersId(this.movieId).subscribe(
      (res: any) =>
      {
        this.theatersMovie = res;
        console.log("theatersMovie:",this.theatersMovie)
      },
      (error: any) => {
        this.Erro = error;
      }
    )
  }


  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

}
