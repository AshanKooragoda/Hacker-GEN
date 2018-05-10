import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {
  assignments: object;
<<<<<<< HEAD
  inAndOut: object[];
  loginservice: UserService;
  answer: string;
  tempAnswer: string;
  language: string;
  title: string;
  assignment_ID: string;
=======
  loginservice: UserService;
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c

  constructor(private login: UserService) {
    this.loginservice = login;
    this.getAssignments();
<<<<<<< HEAD
    this.inAndOut = [];
=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  ////////////////// Get all assignments from database
=======
  // Get all assignments from database
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
  getAssignments() {
    this.loginservice.allAssignments().subscribe(
      data => {
        this.assignments = data;
<<<<<<< HEAD
=======
        console.log(data);
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }
<<<<<<< HEAD

  ////////////// compile the code
  compile(ans, lang) {
    this.loginservice.compiler(ans, lang).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(JSON.stringify((error.json())));
      });
  }

  ////////////// get inputs and outputs
  inputsAndOutputs() {
    this.loginservice.inAndOutOfAssignment(this.assignment_ID).subscribe(
      data => {
        this.inAndOut = data;
      }, error => {
        console.log(JSON.stringify((error.json())));
      });
  }

  ///////////// helps in html markup to get assignment_id and assignment_name
  getAssiName(t) {
    this.title = this.assignments[t].assignment_name;
    this.assignment_ID = this.assignments[t].assignment_no;
    this.inputsAndOutputs();
  }

/// Test and mark marks of the assignment
  testAndMark() {
    // console.log(this.inAndOut);
    // console.log(this.answer);
    if (this.language == 'php') {
      let i;
      for (i = 0; i < this.inAndOut.length; i++) {
        this.tempAnswer = this.answer.replace("?>", "echo Test(") + this.inAndOut[i].input + ');?>';
        this.compile(this.tempAnswer, this.language);
        // console.log(this.tempAnswer);
      }
    }

  }
=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
}
