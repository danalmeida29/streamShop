import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = environment.BASE_URL_API

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient) { }
/**
 * 
 * @returns Obtem uma lista de eventos 
 */
 getEventList(){
    var urlString =`${API_URL}`;
    return this.http.get(urlString) 
  }

  getMovieId(id:any){
    var urlString = `${API_URL}/${id}`;
    return this.http.get(urlString) 
  }

  getTheatersId(id:any){
    var urlString = `${API_URL}/${id}/theaters/`;
    return this.http.get(urlString) 
  }

}
