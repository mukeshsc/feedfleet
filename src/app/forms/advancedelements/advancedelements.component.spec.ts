import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedelementsComponent } from './advancedelements.component';

describe('AdvancedelementsComponent', () => {
  let component: AdvancedelementsComponent;
  let fixture: ComponentFixture<AdvancedelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
