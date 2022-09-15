import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Core/event.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieId: any;
  eventId: any;
  sessionMovie: any;
  Erro: any;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.movieId = localStorage.getItem('movieId');
    this.getMovie();
  }

  getMovie(){
    this.eventService.movieId(this.movieId).subscribe(
      (res:any) =>
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
