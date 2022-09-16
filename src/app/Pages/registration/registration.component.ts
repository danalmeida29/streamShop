import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  mostrar:any;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }
}
