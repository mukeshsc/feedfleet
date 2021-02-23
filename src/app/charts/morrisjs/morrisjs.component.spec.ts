import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrisjsComponent } from './morrisjs.component';

describe('MorrisjsComponent', () => {
  let component: MorrisjsComponent;
  let fixture: ComponentFixture<MorrisjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorrisjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorrisjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
