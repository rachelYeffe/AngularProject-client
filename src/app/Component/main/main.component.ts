import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetailsComponent } from '../jobDetails/jobDetails.component';
import { Subscription } from 'rxjs';
import { JobService } from '../../Services/job.service';
import { MainService } from '../../Services/main.service';

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
  constructor(private router: Router,private mainService:MainService) {
    this.submitClickedSubscription = this.mainService.countCV$.subscribe(
      (value) => {
        // const user = JSON.parse(localStorage.getItem("user") || "{}");
        // const userName = user.name || "defaultUser";
        // const storedCount = localStorage.getItem(userName);
        // if (storedCount !== null) {
        //   this.countOfCV = storedCount;
        // } else {
        //   this.countOfCV = "0"
        this.countOfCV=value.toString();
        // }
      })
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
