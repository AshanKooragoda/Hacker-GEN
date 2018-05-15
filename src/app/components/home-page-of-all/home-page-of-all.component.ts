import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-home-page-of-all',
  templateUrl: './home-page-of-all.component.html',
  styleUrls: ['./home-page-of-all.component.css']
})
export class HomePageOfAllComponent implements OnInit {

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
  // reload home component
  home() {
    this.router.navigate(['hackerGEN/home']);
  }
  // logout and load login page
  logout() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
