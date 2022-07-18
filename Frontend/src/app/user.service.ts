import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullname: '',
    email: '',
    password: '',
    mobile: ''
  };
url:string='api';
  constructor(private http: HttpClient) { }
  postUser(user: User){
    return this.http.post(`$(this.url)`,user);
  }
}
