import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginservice: UserService;
  userDetail: User;
  constructor(private login: UserService) {
    this.loginservice = login;
  }

  ngOnInit() {
  }

  authenticate() {
    if ( this.email != null && this.password != null) {
      this.loginservice.authenticate(this.email, this.password).subscribe(
        data => {
          // console.log(data[0]);
          if (data.length === 1) {
            this.userDetail = new User();

            this.userDetail.password = data[0].password;
            this.userDetail.type = data[0].type;
            this.userDetail.username = data[0].username;
            this.userDetail.name = data[0].name;
            // this.userDetail.index = data[0].index;
            console.log(this.userDetail.type);
            this.navigateuser();
          }else {
            console.log('Enter correct detail');
          }
        }, error => {
          console.log('database error');
          // console.log(JSON.stringify(error.json()));
        });
    }
  }

  navigateuser() {
    if (this.userDetail.type.match('teacher')) {
      console.log('a');
    }
    if (this.userDetail.type.match('student')) {
      console.log('b');
    }
    if (this.userDetail.type.match('admin')) {
      console.log('c');
    }
  }

}
