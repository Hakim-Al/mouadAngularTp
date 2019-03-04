import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPComponent } from './add-product-p.component';

describe('AddProductPComponent', () => {
  let component: AddProductPComponent;
  let fixture: ComponentFixture<AddProductPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
