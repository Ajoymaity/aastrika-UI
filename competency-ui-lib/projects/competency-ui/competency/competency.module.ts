import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredComptencyCardComponent } from './components/required-comptency-card/required-comptency-card.component';
import { GainedComptencyCardComponent } from './components/gained-comptency-card/gained-comptency-card.component';
import { CompetencyDashboardComponent } from './components/competency-dashboard/competency-dashboard.component';

import { ActiveSummaryComponent } from './components/active-summary/active-summary.component';
import { MatTabsModule, MatIconModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    RequiredComptencyCardComponent, 
    GainedComptencyCardComponent, 
    CompetencyDashboardComponent, 
    ActiveSummaryComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [RequiredComptencyCardComponent,
    GainedComptencyCardComponent,
    CompetencyDashboardComponent,
    ActiveSummaryComponent
  ]
})
export class CompetencyModule { }
