import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-plagarism',
  templateUrl: './plagarism.component.html',
  styleUrls: ['./plagarism.component.css']
})
export class PlagarismComponent implements OnInit {

  plagrism: object;
  loginservice: UserService;
  str1 = 'asdadasd';
  str2 = 'asdadfads';


  constructor(private login: UserService) {
    this.loginservice = login;
    this.getPlagarism();
    // let i = 0;
    // for (i; this.str1.length; i++) {
    //   console.log(this.str1[i]);
    // }
  }


  ngOnInit() {
  }
// get all plagaris
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
