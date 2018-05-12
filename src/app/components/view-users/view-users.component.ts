import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  loginservice: UserService;
<<<<<<< HEAD
  users: object;
=======
  users: object[]
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
  constructor(private login: UserService) {
    this.loginservice = login;
    this.aaaa();
  }


  ngOnInit() {
  }
deleteUser(index) {
  console.log(index);
  this.loginservice.deleteUser(index).subscribe(
    data => {
      this.aaaa();
    }, error => {
      alert('database error');
      console.log(JSON.stringify(error.json()));
    });
}
aaaa() {
  this.loginservice.alluser().subscribe(
    daa => {
      this.users = daa;
    }, error => {
      alert('database error');
      console.log(JSON.stringify(error.json()));
    });
}
}
