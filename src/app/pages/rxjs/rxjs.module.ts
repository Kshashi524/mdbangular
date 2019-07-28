import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {RxjsRoutingModule} from './rxjs-routing.module';
import {RxjsComponent} from './rxjs.component';
import {LandingComponent} from './landing/landing.component';

@NgModule({
  declarations: [RxjsComponent, LandingComponent],
  imports: [
    SharedModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule {
}
