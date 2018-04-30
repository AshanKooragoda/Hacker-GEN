import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageOfAllComponent } from './home-page-of-all.component';

describe('HomePageOfAllComponent', () => {
  let component: HomePageOfAllComponent;
  let fixture: ComponentFixture<HomePageOfAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageOfAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageOfAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
