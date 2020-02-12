import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyVolunteerComponent } from './modify-volunteer.component';

describe('ModifyVolunteerComponent', () => {
  let component: ModifyVolunteerComponent;
  let fixture: ComponentFixture<ModifyVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
