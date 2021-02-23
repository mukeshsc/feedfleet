import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediagroupComponent } from './mediagroup.component';

describe('MediagroupComponent', () => {
  let component: MediagroupComponent;
  let fixture: ComponentFixture<MediagroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediagroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediagroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
