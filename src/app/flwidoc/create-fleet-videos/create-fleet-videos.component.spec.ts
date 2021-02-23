import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFleetVideosComponent } from './create-fleet-videos.component';

describe('CreateFleetVideosComponent', () => {
  let component: CreateFleetVideosComponent;
  let fixture: ComponentFixture<CreateFleetVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFleetVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFleetVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

