import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSalesComponent } from './filter-sales.component';

describe('FilterSalesComponent', () => {
  let component: FilterSalesComponent;
  let fixture: ComponentFixture<FilterSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
