import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdiiconsComponent } from './mdiicons.component';

describe('MdiiconsComponent', () => {
  let component: MdiiconsComponent;
  let fixture: ComponentFixture<MdiiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdiiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdiiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
