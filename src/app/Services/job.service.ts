import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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
    return jobs.filter(p => field[p.field].toString() === job);
  }
  filterAreaField(area: string, fieldd: string): Observable<Job[]> {
    console.log(area);

    return this.http.get<Job[]>("https://localhost:44337/api/Job/GetAllJobs")
      .pipe(map(jobs => jobs.filter(job => job.area === area && field[job.field].toString() === fieldd)));
  }
 
  sumCV:string='0';
count=0;
  private countCV = new BehaviorSubject<number>(0);
  countCV$ = this.countCV.asObservable();
  setCountCV(number: number) {
    if(this.sumCV=='0')
      {
        const countCVValue = localStorage.getItem('countCV');
        if (countCVValue !== null) {
          this.sumCV = countCVValue;
          this.count=parseInt(this.sumCV)+1;
        }
      }
  else{
    this.count++;

  }
    this.sumCV=this.count.toString();
   localStorage.setItem("countCV",this.sumCV.toString());
    this.countCV.next(0);
  }

}
