import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  loginservice: UserService;
  users: object;
  constructor(private login: UserService) {
    this.loginservice = login;
    this.loadAllUsers();
  }


  ngOnInit() {
  }
  // delete specific user
deleteUser(index) {
  console.log(index);
  this.login.deleteUser(index).subscribe(
    data => {
      this.loadAllUsers();
    }, error => {
      alert('database error');
      console.log(JSON.stringify(error.json()));
    });
}

// load all useers to the component
loadAllUsers() {
  this.login.alluser().subscribe(
    daa => {
      this.users = daa;
    }, error => {
      alert('database error');
      console.log(JSON.stringify(error.json()));
    });
}
}
