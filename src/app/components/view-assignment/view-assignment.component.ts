import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {
  assignments: object;
  loginservice: UserService;

  constructor(private login: UserService) {
    this.loginservice = login;
    this.getAssignments();
  }

  ngOnInit() {
  }

  // Get all assignments from database
  getAssignments() {
    this.loginservice.allAssignments().subscribe(
      data => {
        this.assignments = data;
        console.log(data);
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }
}
