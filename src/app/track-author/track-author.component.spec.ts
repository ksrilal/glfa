import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAuthorComponent } from './track-author.component';

describe('TrackAuthorComponent', () => {
  let component: TrackAuthorComponent;
  let fixture: ComponentFixture<TrackAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
