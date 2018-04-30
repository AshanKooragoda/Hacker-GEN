import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  ///////////////////////////////////////////////
  inputs: string[];
  outputs: string[];
  input: string;
  output: string;
  ////////////////////////////////// input output ariables
  assignment_name: string;
  assignmenr_password: string;
  deadline: string;
  language: 'Python';
  loginservice: UserService;
  descrption: string;
  assignment_no;
///////////////////////////////////////////////////////////
  constructor(private login: UserService) {
    this.loginservice = login;
    this.inputs = [];
    this.outputs = [];
  }

  ngOnInit() {
  }

  ///////////////////////////////// add inputs to the assignment
  addInputOutput() {
    if (this.output != null && this.input != null) {
      if (this.input.length > 0 && this.input.length > 0) {
        this.outputs.push(this.output);
        this.inputs.push(this.input);
        this.input = null;
        this.output = null;
      } else {
        alert('please enter input outputs');
      }
    } else {
      alert('please enter correct detail');
    }
  }

  /////////////////////////// delete inputs in assignment
  deleteInputOutput(i) {
    this.outputs.splice(i, 1);
    this.inputs.splice(i, 1);
  }

  ////////////////////////// add assignment to database
  addassignment() {
    if (this.assignment_name != null && this.deadline != null && this.inputs.length > 0 && this.outputs.length > 0 && this.descrption != null) {
      if (this.assignment_name.length > 0 && this.deadline.length > 0 && this.descrption.length > 0) {
        this.loginservice.addAssignment(this.assignment_name, this.descrption, this.assignmenr_password, this.deadline, this.language).subscribe(
          data => {
            this.assignment_no = data[0]['max(assignment_no)'];
            alert('Assignment added');
            this.addInoutOutputToDatabase();
          }, error => {
            alert('Assignment is not added please input valid data');
            console.log(JSON.stringify(error.json()));
          });
      }
    }
  }

  ////////////////////////// add input  output
  addInoutOutputToDatabase() {
    let i = 0;
    for (i; i < this.inputs.length; i++) {
      this.loginservice.addInputOutput(this.assignment_no, this.inputs[i], this.outputs[i]).subscribe(
        data => {
        }, error => {
          console.log('output is not added please input valid data');
          console.log(JSON.stringify(error.json()));
        });
    }
  }
}
