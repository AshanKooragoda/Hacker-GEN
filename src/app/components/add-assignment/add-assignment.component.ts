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
<<<<<<< HEAD
  descrption: string;
  language: string;
  loginservice: UserService;
=======
  assignmenr_password: string;
  deadline: string;
  language: 'Python';
  loginservice: UserService;
  descrption: string;
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
  assignment_no;
///////////////////////////////////////////////////////////
  constructor(private login: UserService) {
    this.loginservice = login;
    this.inputs = [];
    this.outputs = [];
<<<<<<< HEAD
    this.assignment_name = '';
    this.descrption = '';
    this.language = '';
    this.input = '';
    this.output = '';
=======
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
  }

  ngOnInit() {
  }

  ///////////////////////////////// add inputs to the assignment
  addInputOutput() {
<<<<<<< HEAD
    if (this.output !== '' && this.input !== '') {
      if (this.input.length > 0 && this.input.length > 0) {
        this.outputs.push(this.output);
        this.inputs.push(this.input);
        this.input = '';
        this.output = '';
      } else {
        alert('please enter correct input outputs');
      }
    } else {
      alert('please enter correct input outputs');
=======
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
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
    }
  }

  /////////////////////////// delete inputs in assignment
  deleteInputOutput(i) {
    this.outputs.splice(i, 1);
    this.inputs.splice(i, 1);
  }

  ////////////////////////// add assignment to database
  addassignment() {
<<<<<<< HEAD
    if (this.assignment_name !== '' && this.inputs.length > 0 && this.outputs.length > 0 && this.descrption !== '' && this.language !== '') {
      if (this.assignment_name.length > 0 && this.descrption.length > 0) {
        this.loginservice.addAssignment(this.assignment_name, this.descrption, this.language).subscribe(
=======
    if (this.assignment_name != null && this.deadline != null && this.inputs.length > 0 && this.outputs.length > 0 && this.descrption != null) {
      if (this.assignment_name.length > 0 && this.deadline.length > 0 && this.descrption.length > 0) {
        this.loginservice.addAssignment(this.assignment_name, this.descrption, this.assignmenr_password, this.deadline, this.language).subscribe(
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
          data => {
            this.assignment_no = data[0]['max(assignment_no)'];
            alert('Assignment added');
            this.addInoutOutputToDatabase();
          }, error => {
            alert('Assignment is not added please input valid data');
            console.log(JSON.stringify(error.json()));
          });
      }
<<<<<<< HEAD
    }else {
      alert('Assignment is not added please check assignment again');
=======
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
    }
  }

  ////////////////////////// add input  output
  addInoutOutputToDatabase() {
    let i = 0;
    for (i; i < this.inputs.length; i++) {
      this.loginservice.addInputOutput(this.assignment_no, this.inputs[i], this.outputs[i]).subscribe(
        data => {
        }, error => {
<<<<<<< HEAD
          alert('output is not added please input valid data');
=======
          console.log('output is not added please input valid data');
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
          console.log(JSON.stringify(error.json()));
        });
    }
  }
}
