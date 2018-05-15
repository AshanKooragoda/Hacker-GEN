import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers: object;
  index: string;
  visible: boolean;

  constructor(protected router: Router, private login: UserService) {
    if (login.getUser().type === 'student') {
      this.index = login.getUser().index;
      this.visible = false;
      this.getanswer();
    } else if (login.getUser().type === 'admin') {
      this.visible = true;
      this.index = '';
      this.allanswers();
    } else if (login.getUser().type === 'teacher') {
      this.visible = true;
      this.index = '';
      this.allanswers();
    } else {
      router.navigate(['']);
    }
  }

  // get data from database
  getanswer() {
    this.login.getanswertoshow(this.index).subscribe(
      data => {
        if (data.length > 0) {
          this.answers = data;
          console.log(data);
        } else {
          alert('PLEASE ENTER CORRECT INDEX');
        }
      }, error => {
        console.log(JSON.stringify((error.json())));
      });
  }
 // load allanswers to the component
  allanswers() {
    if (this.index === '') {
      this.login.allanswers().subscribe(
        data => {
          this.answers = data;
          // console.log(data);
        }, error => {
          console.log(JSON.stringify((error.json())));
        });
    }
  }

  ngOnInit() {
  }


}
