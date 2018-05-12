import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.css']
})
export class MyDetailComponent implements OnInit {
  userDetail: User;
  show: boolean;
  name: string;
  email: string;
  contact: string;
  oldpassword: string;
  password: string;
  confirmpassword: string;

  constructor(protected router: Router, private login: UserService) {
    this.userDetail = login.getUser();
    // console.log(this.userDetail);
    this.show = false;
    this.name = '';
    this.email = '';
    this.contact = '';
    this.oldpassword = '';
    this.password = '';
    this.confirmpassword = '';
  }

// show change detail or not
  showme() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  changeDetail() {
    if (this.oldpassword === this.userDetail.password) {
      if (this.name !== '' && this.email !== '' && this.contact !== '' && this.password !== '') {
        if (this.password.length > 8) {
          this.login.updateUser(this.name, this.email, this.password, this.contact, this.login.getUser().index).subscribe(
            data => {
                alert('User Deetail Updated');
                this.router.navigate(['']);
            }, error => {
              alert('error please try again later...');
              console.log(JSON.stringify(error.json()));
            });

        } else {
          alert('seelct a password more than 8 charactor');
        }
      } else {
        alert('Please enter All detail to change your Detail');
      }
    } else {
      alert('Please Enter Your Old password Correct');
    }
  }

  ngOnInit() {
  }

}
