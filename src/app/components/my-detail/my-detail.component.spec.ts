import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailComponent } from './my-detail.component';

describe('MyDetailComponent', () => {
  let component: MyDetailComponent;
  let fixture: ComponentFixture<MyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
