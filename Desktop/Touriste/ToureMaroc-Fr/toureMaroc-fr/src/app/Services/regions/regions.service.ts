import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http: HttpClient) { }

  public getregions( ){
    return this.http.get(`http://localhost:8084/regions`, { observe: 'response' });
  }
}
