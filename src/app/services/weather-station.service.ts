import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherStation } from '../models/WeatherStation';

const API = `http://localhost:3333/weatherStation`

@Injectable({ providedIn: 'root' })
export class WeatherStationService {


  constructor(private http: HttpClient) {
  }

  public getById(id: string): Observable < WeatherStation > {
    return this.http.get<WeatherStation>(API + "/" + id);
  }
  
    public getAll(): Observable < WeatherStation[] > {
    return this.http.get<WeatherStation[]>(API);
  }
  
    public create<WeatherStation>(weatherStation: any): Observable < WeatherStation > {
    return this.http.post<WeatherStation>(API, JSON.stringify(weatherStation))
  }
  
    public update<WeatherStation>(weatherStation: any): Observable < WeatherStation > {
    return this.http.put<WeatherStation>(API + "/" + weatherStation.id, JSON.stringify(weatherStation))
  }
  
}
