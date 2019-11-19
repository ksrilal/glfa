import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDriversComponent } from './contact-drivers.component';

describe('ContactDriversComponent', () => {
  let component: ContactDriversComponent;
  let fixture: ComponentFixture<ContactDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
