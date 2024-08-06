import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequiredComptencyCardComponent } from './required-comptency-card.component';

describe('RequiredComptencyCardComponent', () => {
  let component: RequiredComptencyCardComponent;
  let fixture: ComponentFixture<RequiredComptencyCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredComptencyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredComptencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
