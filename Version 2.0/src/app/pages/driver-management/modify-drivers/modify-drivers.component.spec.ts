import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDriversComponent } from './modify-drivers.component';

describe('ModifyDriversComponent', () => {
  let component: ModifyDriversComponent;
  let fixture: ComponentFixture<ModifyDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
