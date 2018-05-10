import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page-of-all',
  templateUrl: './home-page-of-all.component.html',
  styleUrls: ['./home-page-of-all.component.css']
})
export class HomePageOfAllComponent implements OnInit {

<<<<<<< HEAD
  constructor(protected router: Router) {
    // this.router.navigate(['home']);
  }
=======
  constructor(protected router: Router) { }
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c

  ngOnInit() {
  }

}
