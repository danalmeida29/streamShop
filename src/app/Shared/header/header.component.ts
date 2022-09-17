import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/Core/event.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute: any;
  goBackButton!: boolean;
  constructor( 
    private eventService: EventService,
    private router: Router,
    private location: Location
    ) {
    this.router.events.subscribe((event: Event) => {
      this.currentRoute = "";
      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        this.currentRoute = event;          
        this.hideButton();
      }

      if (event instanceof NavigationError) {
      }
    })
  }
  
  ngOnInit(): void {
  }
/**
 * Metodo que volta a rota das paginas
 */
  back(): void {
    this.location.back()
  }
  /**
  * Metodo que observa qual pagina deve exiber o button de voltar
  */
  hideButton(){
    if(this.currentRoute.url == '/' || this.currentRoute.url == '/Info' ){
      this.goBackButton = false;
    } else{
      this.goBackButton = true;
    }
  }

  onNavigateTo(pageName: any) {
    this.eventService.hideButton();
    this.router.navigate([`/${pageName}`]);
  }



}
