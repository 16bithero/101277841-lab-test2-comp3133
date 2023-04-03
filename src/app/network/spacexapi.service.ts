import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private baseUrl = 'https://api.spacexdata.com/v3';
  constructor(private http: HttpClient) { }

  getMissions(years?: string[]): Observable<Mission[]> {
    let url = `${this.baseUrl}/launches?limit=100`;
    if (years && years.length) {
      url += `&launch_year=${years.join(',')}`;
    }    
    return this.http.get<Mission[]>(url);
  }

  getMissionDetails(flight_number: number): Observable<any> {
    const url = `${this.baseUrl}/launches/${flight_number}`;
    return this.http.get<Mission[]>(url);
  }
}
