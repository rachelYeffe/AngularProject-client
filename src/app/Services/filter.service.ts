import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job } from '../Models/Job';
import { field } from '../Models/Field';

import { type } from 'node:os';

@Injectable({
  providedIn: 'root'
})
export class FilterService {


  constructor(private http: HttpClient) { }


  filter(area: string, fieldd: string): Observable<Job[]> {
    console.log(area);

    return this.http.get<Job[]>("https://localhost:44337/api/Job/GetAllJobs")
      .pipe(map(jobs => jobs.filter(job => job.area === area && field[job.field].toString() === fieldd)));
  }

}
