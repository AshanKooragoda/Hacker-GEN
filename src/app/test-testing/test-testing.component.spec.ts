import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { TestTestingComponent } from './test-testing.component';

describe ('TestTestingComponent', () => {
  // setup service
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestTestingComponent]
    });
  });

  it('should be created', inject([TestTestingComponent], (service: TestTestingComponent) => {
    expect(service).toBeTruthy();
  }));

  it('should have add function',
    inject([TestTestingComponent], (service: TestTestingComponent) => {
      expect(service.add).toBeTruthy();
    }));

  it('should add correctly' ,
    inject([TestTestingComponent], (service: TestTestingComponent) => {
      expect(service.add(1, 2)).toEqual(3);
    }));
});
