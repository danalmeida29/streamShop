import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Core/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
 
  erro: any;
  movieEvent: any;
  filteredList: any;
  movieId: any;

  @Output() hideButton = new EventEmitter();

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.getEventList();
  }

  getEventList(){
    this.movieEvent = this.eventService.getEventList().subscribe(
      (res:any) => {
        this.movieEvent = res;
        this.filteredList = this.movieEvent;
      },
      (error: any) => {
        this.erro = error;
      }
    )
  }

  filterEvent(event: Event){
    let filterValue = (event.target as HTMLInputElement).value
    this.filteredList = this.movieEvent.filter((event: any) =>
    event.title.trim().toLowerCase().includes(filterValue))
  }

  movie(id:any){
    localStorage.setItem('movieId', id);
    this.onNavigateTo('cinemas')
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }
}
