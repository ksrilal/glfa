import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqVolunteersComponent } from './req-volunteers.component';

describe('ReqVolunteersComponent', () => {
  let component: ReqVolunteersComponent;
  let fixture: ComponentFixture<ReqVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
