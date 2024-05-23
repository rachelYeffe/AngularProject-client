// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Job } from '../Models/Job';
// import { field } from '../Models/Field';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobService {

//   constructor(private http: HttpClient) { }

//   getAllJobs(): Observable<any> {
//     return this.http.get("https://localhost:44337/api/Job/GetAllJobs");
//   }
//   filter(job: Job, jobs: Job[]): Job[] {
//     console.log(job.field.valueOf());
//     console.log(jobs[0].field);

//     return jobs.filter(p => p.field == job.field.valueOf());

//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../Models/Job';
import { field } from '../Models/Field';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<any> {
    return this.http.get("https://localhost:44337/api/Job/GetAllJobs");
  }

  filter(job: string, jobs: Job[]): Job[] {
    return jobs.filter(p =>field[p.field] .toString() === job);
  }
}
