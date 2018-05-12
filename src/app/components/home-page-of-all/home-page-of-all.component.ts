<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
=======
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795

@Component({
  selector: 'app-home-page-of-all',
  templateUrl: './home-page-of-all.component.html',
  styleUrls: ['./home-page-of-all.component.css']
})
export class HomePageOfAllComponent implements OnInit {

<<<<<<< HEAD
  loginservice: UserService;
  teacher: boolean;
  student: boolean;
  admin: boolean;

  constructor(protected router: Router, private login: UserService) {
    this.loginservice = login;
    this.router.navigate(['hackerGEN/home']);
    this.student = false;
    this.teacher = false;
    this.admin = false;
    // console.log(login.getUser().type);
    //// check for login type
    if (login.getUser().type === 'teacher') {
      this.teacher = true;
    }else if (login.getUser().type === 'student') {
      this.student = true;
    }else if (login.getUser().type === 'admin') {
      this.admin = true;
    }else {
      this.router.navigate(['']);
    }

  }
  home() {
    this.router.navigate(['hackerGEN/home']);
  }
  logout() {
    this.router.navigate(['']);
  }
=======
<<<<<<< HEAD
  constructor(protected router: Router) {
    // this.router.navigate(['home']);
  }
=======
  constructor(protected router: Router) { }
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795

  ngOnInit() {
  }

}
