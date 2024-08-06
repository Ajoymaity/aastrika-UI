import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActiveSummaryComponent } from './active-summary.component';

describe('ActiveSummaryComponent', () => {
  let component: ActiveSummaryComponent;
  let fixture: ComponentFixture<ActiveSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
