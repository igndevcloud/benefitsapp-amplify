import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenefitsApplicationComponent } from './add-benefits-application.component';

describe('AddBenefitsApplicationComponent', () => {
  let component: AddBenefitsApplicationComponent;
  let fixture: ComponentFixture<AddBenefitsApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBenefitsApplicationComponent]
    });
    fixture = TestBed.createComponent(AddBenefitsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
