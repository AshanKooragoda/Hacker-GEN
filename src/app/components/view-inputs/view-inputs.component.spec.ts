import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInputsComponent } from './view-inputs.component';

describe('ViewInputsComponent', () => {
  let component: ViewInputsComponent;
  let fixture: ComponentFixture<ViewInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
