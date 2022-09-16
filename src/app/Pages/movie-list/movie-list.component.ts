import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Core/event.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieId: any;
  theatersId: any;
  sessionMovie: any;
  theatersMovie: any;
  Erro: any;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.movieId = localStorage.getItem('movieId');
    this.getMovie();
    this.getTheaters();
  }

  getTheaters(){
    this.eventService.getTheatersId(this.movieId).subscribe(
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

}
