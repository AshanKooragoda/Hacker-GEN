import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {log} from "util";

// var express = require('codemirror');

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {
  assignments: object;
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
  }

  ngOnInit() {
  }

  ////////////////// Get all assignments from database
  getAssignments() {
    this.loginservice.allAssignments().subscribe(
      data => {
        this.assignments = data;
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }

  ////////////// get inputs and outputs
  inputsAndOutputs() {
    this.loginservice.inAndOutOfAssignment(this.assignment_ID).subscribe(
      data => {
        this.inAndOut = data;
        this.numberofInputs = data.length;
        // console.log(data);
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
    this.checkSimilarAnswers();
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

// reset all values
  resetAll() {
    this.finalMark = 0;
    this.answer = '';
    this.language = '';
  }

  // check Similar Answers
  checkSimilarAnswers() {
    if (this.answer !== '') {
      this.loginservice.check_same_answer(this.answer).subscribe(
        data => {
          // console.log(data);
          let i = 0;
          for (i; i < data.length; i++) {
            if (this.loginservice.getUser().index !== data[i].index_no) {
              this.login.save_plagarism(data[i].index_no, this.loginservice.getUser().index, this.assignment_ID).subscribe(
                daa => {
                }, error => {
                  console.log(JSON.stringify((error.json())));
                });
            }
          }
        }, error => {
          console.log(JSON.stringify((error.json())));
        });
    }
  }
}
