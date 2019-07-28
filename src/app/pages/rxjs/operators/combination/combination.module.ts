import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CombinationRoutingModule} from './combination-routing.module';
import {CombineAllComponent} from './combine-all/combine-all.component';
import {CombineLatestComponent} from './combine-latest/combine-latest.component';
import {ConcatComponent} from './concat/concat.component';
import {ConcatAllComponent} from './concat-all/concat-all.component';
import {EndWithComponent} from './end-with/end-with.component';
import {ForkJoinComponent} from './fork-join/fork-join.component';
import {MergeComponent} from './merge/merge.component';
import {MergeAllComponent} from './merge-all/merge-all.component';
import {PairwiseComponent} from './pairwise/pairwise.component';
import {RaceComponent} from './race/race.component';
import {StartWithComponent} from './start-with/start-with.component';
import {WithLatestFromComponent} from './with-latest-from/with-latest-from.component';
import {ZipComponent} from './zip/zip.component';
import {LandingComponent} from './landing/landing.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    CombineAllComponent, CombineLatestComponent, ConcatComponent, ConcatAllComponent, EndWithComponent,
    ForkJoinComponent, MergeComponent, MergeAllComponent, PairwiseComponent, LandingComponent,
    RaceComponent, StartWithComponent, WithLatestFromComponent, ZipComponent],
  imports: [
    CommonModule,
    CombinationRoutingModule,
    SharedModule
  ]
})
export class CombinationModule {
}
