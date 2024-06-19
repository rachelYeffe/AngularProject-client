import { Component, ViewChild } from '@angular/core';
import { User } from '../../Models/User';
import { NgForm } from '@angular/forms';
import { UserService } from '../../Services/user-service.service';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  connectUser: User ={ id: 0, name: "", password: "", fieldSearch: "" } ;
  user: User = { id: 0, name: "", password: "", fieldSearch: "" };
  @ViewChild('f') f: NgForm | null = null;
  constructor(private userServices: UserService,private router: Router) { }
  connect() {
    if (this.f?.value.password.length < 8 || /\s/.test(this.f?.value.password)) {
      alert("Password must be at least 8 characters long and contain no spaces.");
      return;
    }
    this.userServices.connectUser(this.user).subscribe(res => {
      this.connectUser = res;
      if (this.connectUser) {
        localStorage.setItem('user',JSON.stringify(this.connectUser));
        this.router.navigate(['/ListJobs']);
      } else {
        alert("😒");
      }
    });
    
    
  }


}
