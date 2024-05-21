import { Component } from '@angular/core';
import { Job } from '../../Models/Job';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.scss'
})
export class ListJobsComponent {
  constructor(private JobService:JobService){
    this.JobService.getAllJobs().subscribe(res=>this.listJobs=res);
  }
  listJobs:Job[]=[];
 
}
