import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDriversCardComponent } from './contact-drivers-card.component';

describe('ContactDriversCardComponent', () => {
  let component: ContactDriversCardComponent;
  let fixture: ComponentFixture<ContactDriversCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDriversCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDriversCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
