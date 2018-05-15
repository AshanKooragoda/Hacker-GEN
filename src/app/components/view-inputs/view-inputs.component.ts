import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-view-inputs',
  templateUrl: './view-inputs.component.html',
  styleUrls: ['./view-inputs.component.css']
})
export class ViewInputsComponent implements OnInit {

  loginservice: UserService;
  allinputs: object;
  assignment_no: string;
  constructor(private login: UserService) {
    this.loginservice = login;
    this.allInputs();
    this.assignment_no = '';
  }

  ngOnInit() {
  }
  allInputs() {
    this.loginservice.allInputs().subscribe(
      data => {
        this.allinputs = data;
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }
  deleteInputs(i) {
    this.loginservice.deleteInput(i).subscribe(
      data => {
        this.allInputs();
        alert('input deleted');
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }
  // get inputs of specific assignment
  assignment(i) {
    if ( this.assignment_no !== '') {
    this.loginservice.input_of_assignment(this.assignment_no).subscribe(
      data => {
        // console.log(data);
        this.allinputs = data;
        this.assignment_no = '';
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
    } else {
      this.allInputs();
    }
  }

}
