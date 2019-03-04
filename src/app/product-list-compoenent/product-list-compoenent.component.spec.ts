import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCompoenentComponent } from './product-list-compoenent.component';

describe('ProductListCompoenentComponent', () => {
  let component: ProductListCompoenentComponent;
  let fixture: ComponentFixture<ProductListCompoenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListCompoenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
