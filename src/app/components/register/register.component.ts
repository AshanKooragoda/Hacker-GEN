import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
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

  condition: boolean;

  constructor(private addusers: UserService) {
    this.loginservice = addusers;
  }

  ngOnInit() {
  }

  addusersToDatabase() {
    this.condition = (this.email != null && this.password != null && this.loginname != null && this.logintype != null && this.id != null && this.confirmpassword === this.password);
    // this.loginservice.adduser(this.id, this.loginname, this.logintype, this.email, this.password );
    // console.log(this.email != null);
    // console.log(this.password != null);
    // console.log(this.loginname != null);
    // console.log(this.email != null);
    // console.log(this.logintype != null);
    // console.log(this.id != null);
    if (this.condition && (this.logintype === 'teacher' || this.logintype === 'student' || this.logintype === 'admin')) {
      this.loginservice.adduser(this.id, this.loginname, this.logintype, this.email, this.password).subscribe(
        data => {
          if (data.length === 1) {
          } else {
            alert('User added');
          }
        }, error => {
          alert('database error');
          console.log(JSON.stringify(error.json()));
        });
    } else {
      alert('Enter corect details to add users');
    }
  }
}
