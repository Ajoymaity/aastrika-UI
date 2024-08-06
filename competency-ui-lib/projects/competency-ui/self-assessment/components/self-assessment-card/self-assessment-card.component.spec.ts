import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelfAssessmentCardComponent } from './self-assessment-card.component';

describe('SelfAssessmentCardComponent', () => {
  let component: SelfAssessmentCardComponent;
  let fixture: ComponentFixture<SelfAssessmentCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAssessmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAssessmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
