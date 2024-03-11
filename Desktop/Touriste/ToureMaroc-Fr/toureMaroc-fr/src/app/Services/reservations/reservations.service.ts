import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  public getreservations( ){
    return this.http.get(`http://localhost:8085/reserve`, { observe: 'response' });
  }
}
