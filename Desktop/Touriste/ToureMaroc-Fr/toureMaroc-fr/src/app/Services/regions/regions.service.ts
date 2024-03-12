import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http: HttpClient) { }

  public getregions():Observable<any>{
    return this.http.get<any>(`http://localhost:8084/regions`);
  }

  public createRegion(region: any):Observable<any>{
    return this.http.post<any>(`http://localhost:8084/region/create`, region);
  }
}
