import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-testing',
  templateUrl: './test-testing.component.html',
  styleUrls: ['./test-testing.component.css']
})
export class TestTestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(a, b) {
    return a + b;
  }
}
