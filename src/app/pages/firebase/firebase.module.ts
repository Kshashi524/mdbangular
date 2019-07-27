import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {FirebaseRoutingModule} from './firebase-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    FirebaseRoutingModule
  ]
})
export class FirebaseModule {
}
