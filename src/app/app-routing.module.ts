import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './Pages/event-list/event-list.component';
import { MovieListComponent } from './Pages/movie-list/movie-list.component';
import { RegistrationComponent } from './Pages/registration/registration.component';

const routes: Routes = [
  {path:'', component: EventListComponent},
  {path:'cinemas', component: MovieListComponent},
  {path:'cadastro', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
