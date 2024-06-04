import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  sumCV:string='0';
count:number=0;
  private countCV = new BehaviorSubject<number>(0);
  countCV$ = this.countCV.asObservable();
  setCountCV(number: number) {
  //   if(this.sumCV=='0')
  //     {
  //       const countCVValue = localStorage.getItem('countCV');
  //       if (countCVValue !== null) {
  //         this.sumCV = countCVValue;
  //         this.count=parseInt(this.sumCV)+1;
  //       }
  //     }
  // else{
  //   this.count++;

  // }
  //   this.sumCV=this.count.toString();
  //  localStorage.setItem("countCV",this.countCV.toString());
  this.count++;
    this.countCV.next(this.count);
  }

}
