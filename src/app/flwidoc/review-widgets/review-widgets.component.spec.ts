import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewWidgetsComponent } from './review-widgets.component';

describe('ReviewWidgetsComponent', () => {
  let component: ReviewWidgetsComponent;
  let fixture: ComponentFixture<ReviewWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
