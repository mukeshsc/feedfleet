import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetWidgetsComponent } from './fleet-widgets.component';

describe('FleetWidgetsComponent', () => {
  let component: FleetWidgetsComponent;
  let fixture: ComponentFixture<FleetWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
