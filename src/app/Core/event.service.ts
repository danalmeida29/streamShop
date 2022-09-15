import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASE_URL = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events';

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
    var urlString =`${BASE_URL}`;
    return this.http.get(urlString) 
  }

  movieId(id:any){
    var urlString = `${BASE_URL}/${id}/theaters`;
    return this.http.get(urlString) 
  }

}
