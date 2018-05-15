import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { AddAssignmentComponent } from './add-assignment.component';


describe('AddAssignmentComponent', () => {
  let component: AddAssignmentComponent;
  let fixture: ComponentFixture<AddAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have add-assignment function',
    inject([AddAssignmentComponent], (service: AddAssignmentComponent) => {
      expect(service.addassignment).toBeTruthy();
    }));
});
