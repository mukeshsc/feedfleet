import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongroupComponent } from './buttongroup.component';

describe('ButtongroupComponent', () => {
  let component: ButtongroupComponent;
  let fixture: ComponentFixture<ButtongroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtongroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtongroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
