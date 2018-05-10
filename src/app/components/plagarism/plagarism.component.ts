import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-plagarism',
  templateUrl: './plagarism.component.html',
  styleUrls: ['./plagarism.component.css']
})
export class PlagarismComponent implements OnInit {

  plagrism: object;
  loginservice: UserService;

  constructor(private login: UserService) {
    this.loginservice = login;
    this.getPlagarism();
  }


  ngOnInit() {
  }
  getPlagarism() {
    this.loginservice.allplagarism().subscribe(
      data => {
        this.plagrism = data;
        console.log(data);
      }, error => {
        alert('database error');
        console.log(JSON.stringify(error.json()));
      });
  }

}
