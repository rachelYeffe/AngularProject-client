import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { MainComponent } from './Component/main/main.component';
import { ListJobsComponent } from './Component/list-jobs/list-jobs.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Main', component: MainComponent },
  { path: 'ListJobs/:Job', component: ListJobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
