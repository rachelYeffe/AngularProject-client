// import { Component, Input, EventEmitter, Output} from '@angular/core';
// import { Job } from '../../Models/Job';
// import { field } from '../../Models/Field';
// import { MainService } from '../../Services/main.service';
// import { emit } from 'process';

// @Component({
//   selector: 'app-job-details',
//   templateUrl: './jobDetails.component.html',
//   styleUrls: ['./jobDetails.component.scss']
// })
// export class JobDetailsComponent {
//      constructor(private MainService :MainService){

//      }
//   @Input()
//   job: Job =
//     {
//       field: field.QA,
//       requirements: "",
//       scopeOfHours: 0,
//       area: "",
//       Hybrid: false
//     };
//   // sumCV:number=0;
//   @Output()
//   count: EventEmitter<number> = new EventEmitter<number>();
//   countCV() {
//     // this.sumCV++;
//     // this.count.emit(this.sumCV);
//      this.MainService.addToCv();
    
//   }
// }

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Job } from '../../Models/Job';
import { field } from '../../Models/Field';
import { MainService } from '../../Services/main.service';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './jobDetails.component.html',
  styleUrls: ['./jobDetails.component.scss']
})
export class JobDetailsComponent {
  constructor(private jobService: JobService) {}

  @Input()
  job: Job = {
    field: field.QA,
    requirements: "",
    scopeOfHours: 0,
    area: "",
    Hybrid: false
  };

  @Output()
  count: EventEmitter<number> = new EventEmitter<number>();

  
  countCV(event: any) {
    const selectedFile = event.target.files[0];
    if(selectedFile)
      this.jobService.setCountCV(1);
    // this.mainService.addToCv();
  }
}

