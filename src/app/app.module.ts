import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './Shared/modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { EventListComponent } from './Pages/event-list/event-list.component';
import { MovieListComponent } from './Pages/movie-list/movie-list.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { HeaderComponent } from './Shared/header/header.component';
import { InfoStatusComponent } from './Shared/info-status/info-status.component';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    MovieListComponent,
    RegistrationComponent,
    HeaderComponent,
    InfoStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ModalModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
