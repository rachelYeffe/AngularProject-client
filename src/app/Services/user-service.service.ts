import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  connectUser(user:User):Observable<any>{
     return this.http.post("https://localhost:44337/api/Person/ConnectUser" ,user);
  }
}
