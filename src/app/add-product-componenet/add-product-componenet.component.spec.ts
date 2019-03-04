import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponenetComponent } from './add-product-componenet.component';

describe('AddProductComponenetComponent', () => {
  let component: AddProductComponenetComponent;
  let fixture: ComponentFixture<AddProductComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
