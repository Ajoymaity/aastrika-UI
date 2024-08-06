import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlefAssessmentEntryComponent } from './slef-assessment-entry.component';

describe('SlefAssessmentEntryComponent', () => {
  let component: SlefAssessmentEntryComponent;
  let fixture: ComponentFixture<SlefAssessmentEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlefAssessmentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlefAssessmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
