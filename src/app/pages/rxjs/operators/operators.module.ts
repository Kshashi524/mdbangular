import {NgModule} from '@angular/core';

import {OperatorsRoutingModule} from './operators-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {LandingComponent} from './landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    SharedModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule {
}
