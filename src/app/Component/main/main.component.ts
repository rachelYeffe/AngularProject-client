import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../Services/main.service';
import { JobDetailsComponent } from '../jobDetails/jobDetails.component';
import { Subscription } from 'rxjs';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userName: string = 'guest';
  jobField: string = 'empty';
  // resumesSent: number = 0;
countOfCV:string='0';
private submitClickedSubscription: Subscription;
  constructor(private router: Router,private mainService:MainService,private jobService:JobService) {
    // this.countOfCV=this.mainService.count;
    this.submitClickedSubscription = this.jobService.countCV$.subscribe(
      (value) => {
        if (localStorage.getItem('countCV')) {
          const countCVValue = localStorage.getItem('countCV');
          if (countCVValue !== null) {
            this.countOfCV = countCVValue;
          }
        }
        

   } )
   }
  ngOnInit(): void {
    if (this.isLocalStorageAvailable()) {
      this.navigateToJobs();
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if(user.name!=null){
        this.userName = user.name ;
        this.jobField = user.fieldSearch ;
      }
      else
      this.navigateToLogin();

    } else {
      console.warn('Local storage is not available.');
      // this.navigateToLogin();
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/Login']);
  }

  navigateToJobs(): void {
    this.router.navigate(['/ListJobs'] );
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
