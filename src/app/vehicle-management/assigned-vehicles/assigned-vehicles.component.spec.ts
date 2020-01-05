import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedVehiclesComponent } from './assigned-vehicles.component';

describe('AssignedVehiclesComponent', () => {
  let component: AssignedVehiclesComponent;
  let fixture: ComponentFixture<AssignedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
