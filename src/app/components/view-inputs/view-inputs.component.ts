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
  constructor(private login: UserService) {
    this.loginservice = login;
    this.allInputs();
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

}
