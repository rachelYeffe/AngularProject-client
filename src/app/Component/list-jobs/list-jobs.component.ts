// import { Component } from '@angular/core';
// import { Job } from '../../Models/Job';
// import { JobService } from '../../Services/job.service';
// import { ActivatedRoute } from '@angular/router';
// import { field } from '../../Models/Field';

// @Component({
//   selector: 'app-list-jobs',
//   templateUrl: './list-jobs.component.html',
//   styleUrl: './list-jobs.component.scss'
// })
// export class ListJobsComponent {
//   constructor(private JobService:JobService,private router:ActivatedRoute){
//     this.JobService.getAllJobs().subscribe(res=>this.listJobs=res);
//   }
//   ngOnInit():void{
//     this.router.params.subscribe(p=>{
// this.filter.field=p['Job'];

// console.log(this.filter);
// this.filterJob();

//     })

//   }
//   filterJob(){
//     console.log(this.listJobs);

//     this.listJobs=this.JobService.filter(this.filter,this.listJobs);

//   }
//   listJobs:Job[]=[];
//   filter:Job={   field: field.QA,
//     requirements: "",
//     scopeOfHours: 0,
//     area: "string",
//     Hybrid: false};

// }
import { Component, OnInit } from '@angular/core';
import { Job } from '../../Models/Job';
import { JobService } from '../../Services/job.service';
import { ActivatedRoute } from '@angular/router';
import { field } from '../../Models/Field';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  listJobs: Job[] = [];
  filter: Job = {
    field: field.QA,
    requirements: "",
    scopeOfHours: 0,
    area: "string",
    Hybrid: false
  };

  constructor(private jobService: JobService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((res: Job[]) => {
      this.listJobs = res;
      this.route.params.subscribe(params => {
        this.filter.field = params['Job'];
        console.log(this.filter);
        // this.filterJobs();
      });
    });
  }

  filterJobs() {
    console.log(this.listJobs);
    this.listJobs = this.jobService.filter(this.filter, this.listJobs);
  }
}
