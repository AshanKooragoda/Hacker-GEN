import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagarismComponent } from './plagarism.component';

describe('PlagarismComponent', () => {
  let component: PlagarismComponent;
  let fixture: ComponentFixture<PlagarismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlagarismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagarismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
