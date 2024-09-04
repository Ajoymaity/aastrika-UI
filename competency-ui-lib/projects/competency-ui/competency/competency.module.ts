import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RequiredComptencyCardComponent } from './components/required-comptency-card/required-comptency-card.component';
import { GainedComptencyCardComponent } from './components/gained-comptency-card/gained-comptency-card.component';
import { CompetencyDashboardComponent } from './components/competency-dashboard/competency-dashboard.component';
import { ActiveSummaryComponent } from './components/active-summary/active-summary.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreModule } from '@aastrika_npmjs/comptency/core';
import { CompetencyAccordionComponent } from './components/competency-accordion/competency-accordion.component';
import { SelfAssessmentModule } from '@aastrika_npmjs/comptency/self-assessment';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigurationContext } from './services/configuration-context';
import { ConfigService } from './services/config.service';


@NgModule({
  declarations: [
    RequiredComptencyCardComponent,
    GainedComptencyCardComponent,
    CompetencyDashboardComponent,
    ActiveSummaryComponent, CompetencyAccordionComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CoreModule,
    SelfAssessmentModule,
    TranslateModule
  ],
  exports: [RequiredComptencyCardComponent,
    GainedComptencyCardComponent,
    CompetencyDashboardComponent,
    ActiveSummaryComponent
  ]
})
export class CompetencyModule {
  /**
 * Take the config from consuming apps
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
  static forRoot(configContext: ConfigurationContext): ModuleWithProviders {
    return {
      ngModule: CompetencyModule,
      providers: [ConfigService,
        {provide: 'config', useValue: configContext.config}
      ]
    }
  }
 }
