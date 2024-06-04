

import { Component, OnInit } from '@angular/core';
import { Job } from '../../Models/Job';
import { JobService } from '../../Services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  listJobs: Job[] = [];
  filter: string = "";
  listJobsCV: string[] = [];
  sentMoreOne: boolean = false;
  constructor(private jobService: JobService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((res: Job[]) => {
      this.listJobs = res;
      this.route.params.subscribe(params => {
        this.filter = params['Job'];
        if (this.filter != null)
          this.filterJobs();
      });
    });
  }

  filterJobs() {
    console.log(this.listJobs);
    this.listJobs = this.jobService.filter(this.filter, this.listJobs);
  }

  filterArea($event: { area: string, field: string }) {
    this.jobService.filterAreaField($event.area, $event.field).subscribe(res => this.listJobs = res);
  }
  addTolistJobsCV($event: any) {
    this.sentMoreOne = true;
    this.listJobsCV.push($event);

  }
}
