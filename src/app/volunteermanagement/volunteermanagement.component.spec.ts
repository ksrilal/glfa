import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteermanagementComponent } from './volunteermanagement.component';

describe('VolunteermanagementComponent', () => {
  let component: VolunteermanagementComponent;
  let fixture: ComponentFixture<VolunteermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
