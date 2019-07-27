import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {RxjsRoutingModule} from './rxjs-routing.module';
import {RxjsComponent} from './rxjs.component';

@NgModule({
  declarations: [RxjsComponent],
  imports: [
    SharedModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule {
}
