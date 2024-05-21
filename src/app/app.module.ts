import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Component/main/main.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobDetailsComponent } from './Component/job/job.component';
import { ListJobsComponent } from './Component/list-jobs/list-jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    JobDetailsComponent,
    ListJobsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
