import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagiconsComponent } from './flagicons.component';

describe('FlagiconsComponent', () => {
  let component: FlagiconsComponent;
  let fixture: ComponentFixture<FlagiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
