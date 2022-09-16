import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-status',
  templateUrl: './info-status.component.html',
  styleUrls: ['./info-status.component.scss']
})
export class InfoStatusComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }


}
