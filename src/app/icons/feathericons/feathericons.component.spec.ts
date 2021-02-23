import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeathericonsComponent } from './feathericons.component';

describe('FeathericonsComponent', () => {
  let component: FeathericonsComponent;
  let fixture: ComponentFixture<FeathericonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeathericonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeathericonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
