import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userName: string = 'אורח';
  jobField: string = 'לא צויין';
  resumesSent: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.isLocalStorageAvailable()) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.userName = user.name || 'אורח';
      this.jobField = user.fieldSearch || 'לא צויין';
      this.resumesSent = user.resumesSent || 0;
    } else {
      console.warn('Local storage is not available.');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToJobs(): void {
    this.router.navigate(['/jobs'], { queryParams: { field: this.jobField } });
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
