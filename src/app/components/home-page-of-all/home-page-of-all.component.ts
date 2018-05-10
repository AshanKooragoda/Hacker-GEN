import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page-of-all',
  templateUrl: './home-page-of-all.component.html',
  styleUrls: ['./home-page-of-all.component.css']
})
export class HomePageOfAllComponent implements OnInit {

  constructor(protected router: Router) {
    // this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
