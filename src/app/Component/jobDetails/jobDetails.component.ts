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
import { JobService } from '../../Services/job.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './jobDetails.component.html',
  styleUrls: ['./jobDetails.component.scss']
})
export class JobDetailsComponent {
  constructor(private mainService: MainService) {}

  @Input()
  job: Job = {
    field: field.QA,
    requirements: "",
    scopeOfHours: 0,
    area: "",
    Hybrid: false
  };

  @Output()
  nameJob: EventEmitter<string> = new EventEmitter<string>();

  
  countCV(event: any) {
    const selectedFile = event.target.files[0];
    if(selectedFile){
      this.mainService.setCountCV(1);
      this.nameJob.emit();
    }
  }
}

