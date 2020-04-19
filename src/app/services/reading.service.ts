import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reading } from '../models/Reading';

const API = `http://localhost:3333/readings`

@Injectable({ providedIn: 'root' })
export class ReadingService {

  constructor(private http: HttpClient) {
  }

  public getById(id: string, page = 1): Observable < Reading > {
    console.log(page)
    return this.http.get<Reading>(API + "/" + id + "?page=" + page);
  }

  public getByDate(id: string, startDate, endDate): Observable < Reading > {
    return this.http.get<Reading>(API + "/date/" + id + "?startDate=" + startDate + "&endDate=" + endDate);
  }
  
  
}
