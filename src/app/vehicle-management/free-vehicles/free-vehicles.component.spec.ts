import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeVehiclesComponent } from './free-vehicles.component';

describe('FreeVehiclesComponent', () => {
  let component: FreeVehiclesComponent;
  let fixture: ComponentFixture<FreeVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
