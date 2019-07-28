import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const MODULES = [CommonModule, MDBBootstrapModulesPro, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class SharedModule {
}
