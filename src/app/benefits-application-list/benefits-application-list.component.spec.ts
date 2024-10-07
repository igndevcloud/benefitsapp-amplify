import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsApplicationListComponent } from './benefits-application-list.component';

describe('BenefitsApplicationListComponent', () => {
  let component: BenefitsApplicationListComponent;
  let fixture: ComponentFixture<BenefitsApplicationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitsApplicationListComponent]
    });
    fixture = TestBed.createComponent(BenefitsApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
