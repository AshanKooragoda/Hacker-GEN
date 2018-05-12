import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
<<<<<<< HEAD
import {Router} from "@angular/router";
import {log} from "util";
=======
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {
  assignments: object;
<<<<<<< HEAD
  inAndOut: object;
  loginservice: UserService;
  answer: string;
  language: string;
  title: string;
  assignment_ID: string;
  numberofInputs: number;
  finalMark: number;
  teacher: boolean;
  student: boolean;
  admin: boolean;
  isanswer: boolean;

  constructor(protected router: Router, private login: UserService) {
    this.loginservice = login;
    this.getAssignments();
    // console.log(login.getUser());
    this.answer = '';
    this.finalMark = 0;
    // set user
    this.student = false;
    this.teacher = false;
    this.admin = false;
    // console.log(login.getUser().type);
    //// check for login type
    if (login.getUser().type === 'teacher') {
      this.teacher = true;
    } else if (login.getUser().type === 'student') {
      this.student = true;
    } else if (login.getUser().type === 'admin') {
      this.admin = true;
    } else {
      this.router.navigate(['']);
    }
=======
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
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  ////////////////// Get all assignments from database
=======
<<<<<<< HEAD
  ////////////////// Get all assignments from database
=======
  // Get all assignments from database
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
  getAssignments() {
    this.loginservice.allAssignments().subscribe(
      data => {
        this.assignments = data;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        console.log(data);
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }
<<<<<<< HEAD
=======
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
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795

  ////////////// get inputs and outputs
  inputsAndOutputs() {
    this.loginservice.inAndOutOfAssignment(this.assignment_ID).subscribe(
      data => {
        this.inAndOut = data;
<<<<<<< HEAD
        this.numberofInputs = data.length;
        // console.log(data);
=======
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
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
<<<<<<< HEAD

  compile(i) {
    // console.log(i);
    const tempAnswer = this.answer.replace('?>', 'echo Test(') + this.inAndOut[i].input + ');?>';
    this.loginservice.compiler(tempAnswer, this.language).subscribe(
      data => {
        // console.log(data.output, this.inAndOut[i].output);
        // console.log(tempAnswer);
        if (this.inAndOut[i].output === data.output) {
          this.inAndOut[i].output = 'Pass';
          this.submitAnswer();
        } else {
          this.inAndOut[i].output = 'Fail';
        }
      }, error => {
        console.log(JSON.stringify((error.json())));
      });
  }

  submitAnswer() {
    let j;
    let mark = 0;
    for (j = 0; j < this.numberofInputs; j++) {
      if (this.inAndOut[j].output === 'Pass') {
        mark = mark + 1;
      }
    }
    this.finalMark = (mark / j ) * 100;
  }

  //////// save your answer
  saveanswer() {
    if (this.isanswer) {
      this.loginservice.updateAnswer(this.assignment_ID, this.loginservice.getUser().index, this.answer, this.language,
        this.finalMark).subscribe(
        data => {
          alert('answer and marks updated');
        }, error => {
          console.log(JSON.stringify((error.json())));
        });
    } else {
      this.loginservice.saveAnswer(this.assignment_ID, this.loginservice.getUser().index, this.answer, this.language,
        this.finalMark).subscribe(
        data => {
          alert('answer and marks saved');
        }, error => {
          console.log(JSON.stringify((error.json())));
        });
    }
  }

  // check weather student has already answer
  hasAnswer() {
    this.loginservice.hasAnswer(this.assignment_ID, this.loginservice.getUser().index).subscribe(
      data => {
        if (data.length > 0) {
          // console.log(data);
          this.answer = data[0].answer;
          this.language = data[0].language;
          this.finalMark = data[0].marks;
          this.isanswer = true;
        } else {
          this.isanswer = false;
          alert('YOU HAVE NOT SAVE ANY ANSWER');
        }
      }, error => {
        console.log(JSON.stringify((error.json())));
        this.isanswer = false;
      });
  }

  resetAll() {
    this.finalMark = 0;
    this.answer = '';
    this.language = '';
  }
=======
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
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
}
