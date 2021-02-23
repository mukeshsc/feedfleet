import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransictionhistoryComponent } from './transictionhistory.component';

describe('TransictionhistoryComponent', () => {
  let component: TransictionhistoryComponent;
  let fixture: ComponentFixture<TransictionhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransictionhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransictionhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
