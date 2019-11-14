import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVolunteersComponent } from './request-volunteers.component';

describe('RequestVolunteersComponent', () => {
  let component: RequestVolunteersComponent;
  let fixture: ComponentFixture<RequestVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
