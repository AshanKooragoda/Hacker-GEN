import { Injectable, Inject } from '@angular/core';
import {User} from '../models/user';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {HttpParams} from "@angular/common/http";

@Injectable()
export class UserService {

  private currentUser: User;
  private http: Http;

  constructor(private router: Router, http: Http) {
    this.currentUser = new User();
    this.http = http;
  }

  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(user) {
    this.currentUser = user;
  }

  authenticate(username, password) {         // get user details according to username and password
    // const data = new HttpParams().set('username', username).set('password', password);
    // console.log(data);
    return this.http.post('http://localhost:3000/get_user', JSON.stringify({username: username, password: password}),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  adduser(index, name, type, emails, password) {         // get user details according to username and password
    // const data = new HttpParams().set('username', username).set('password', password);
    // console.log(data);
    return this.http.post('http://localhost:3000/add_user', JSON.stringify({index: index, name: name, type: type, emails: emails, password: password}),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }


  // queryUsers(data) {        // get every user of a particular type
  //   if (data === 'teacher') {
  //     return this.http.get('http://localhost:3000/get_teachers').map(res => res.json());
  //   }else if (data === 'admin') {
  //     return this.http.get('http://localhost:3000/get_admins').map(res => res.json());
  //   }else {
  //     return this.http.get('http://localhost:3000/get_users').map(res => res.json());
  //   }
  // }
  //
  // queryUserDetail(data) {      // get user details from username ( doesn't include password for this details)
  //   return this.http.post('http://localhost:3000/get_user_detail', JSON.stringify(data),
  //     new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
  //     .map(res => res.json());
  // }

  // queryUsername(usernameInfo) {
  //   return this.http.post('http://localhost/back_End/controllers/user.php/', usernameInfo)
  //     .map(res => res.json());
  // }

}
