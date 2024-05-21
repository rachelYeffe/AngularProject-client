import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getAllJobs():Observable<any>{
     return this.http.get("https://localhost:44337/api/Job/GetAllJobs" );
  }
}
