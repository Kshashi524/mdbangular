import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsComponent} from './rxjs.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component: RxjsComponent, children: [
      {path: '', component: LandingComponent},
      {path: 'operators', loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {
}
