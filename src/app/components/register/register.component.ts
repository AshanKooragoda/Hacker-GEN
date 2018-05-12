import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginservice: UserService;
  email: string;
  password: string;
  loginname: string;
  logintype: string;
  id: string;
  confirmpassword: string;
  teacher: boolean;
  admin: boolean;
  Phonenumber: string;

  condition: boolean;

  constructor(private addusers: UserService) {
    this.loginservice = addusers;
    this.email = '';
    this.password = '';
    this.logintype = '';
    this.loginname = '';
    this.id = '';
    this.confirmpassword = '';
    this.Phonenumber = '';
    // check login type
    if (addusers.getUser().type === 'admin') {
      this.admin = true;
    } else if (addusers.getUser().type === 'teacher') {
      this.teacher = true;
    }
  }

  ngOnInit() {
  }

  // add suers to database
  addusersToDatabase() {
    this.condition = (this.email !== '' && this.password !== '' && this.loginname !== '' && this.logintype !== '' && this.id !== '' && this.Phonenumber !== '');
    // console.log(this.email !== '', this.email);
    // console.log(this.password !== '', this.password);
    // console.log(this.loginname !== '', this.loginname);
    // console.log(this.logintype !== '', this.logintype);
    // console.log(this.id !== '', this.id);
    // console.log(this.confirmpassword === this.password);
    if (this.condition && this.confirmpassword === this.password) {
      this.loginservice.adduser(this.id, this.loginname, this.logintype, this.email, this.password, this.Phonenumber).subscribe(
        data => {
          if (data.length > 0) {
          } else {
            alert('User added');
          }
        }, error => {
          alert('database error please try again later...');
          console.log(JSON.stringify(error.json()));
        });
    } else {
      alert('Enter corect details to add users');
    }
    // set these values to default
    this.email = '';
    this.password = '';
    this.logintype = '';
    this.loginname = '';
    this.id = '';
    this.confirmpassword = '';
    this.Phonenumber = '';
  }
}
