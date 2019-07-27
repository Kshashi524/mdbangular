import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)},
  {path: 'rxjs', loadChildren: () => import('./pages/rxjs/rxjs.module').then(m => m.RxjsModule)},
  {path: 'angular', loadChildren: () => import('./pages/angular/angular.module').then(m => m.AngularModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
