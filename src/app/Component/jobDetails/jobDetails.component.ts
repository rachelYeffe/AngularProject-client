import { Component, Input } from '@angular/core';
import { Job } from '../../Models/Job';
import { field } from '../../Models/Field';

@Component({
  selector: 'app-job-details',
  templateUrl: './jobDetails.component.html',
  styleUrls: ['./jobDetails.component.scss']
})
export class JobDetailsComponent {
  @Input()
  job: Job =
    {
      field: field.QA,
      requirements: "",
      scopeOfHours: 0,
      area: "",
      Hybrid: false
    };
}
