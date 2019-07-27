import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';

const MODULES = [CommonModule, MDBBootstrapModulesPro];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class SharedModule {
}
