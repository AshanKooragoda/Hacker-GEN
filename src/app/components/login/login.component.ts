import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  userDetail: User;

  constructor(private login: UserService, private router: Router) {
  }

  ngOnInit() {
  }
// check and autheticate user
  authenticate() {
    if (this.email != null && this.password != null) { // check for nulls
      this.login.authenticate(this.email, this.password).subscribe(  // call service
        data => {
          if (data.length > 0) {
            // console.log(data);
            this.userDetail = new User();
            this.userDetail.type = data[0].type;
            this.userDetail.username = data[0].email;
            this.userDetail.name = data[0].name;  //////////////set user detail to userservice
            this.userDetail.index = data[0].index_no;
            this.userDetail.telephone = data[0].telephone;
            // console.log(this.userDetail);
            this.router.navigate(['hackerGEN']);
            this.login.setUser(this.userDetail);
          } else {
            console.log('Enter correct detail');
          }
        }, error => {
          console.log('database error');
          console.log(JSON.stringify(error.json()));
        });
    }
  }

}
