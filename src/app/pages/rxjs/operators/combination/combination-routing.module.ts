import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CombineAllComponent} from './combine-all/combine-all.component';
import {LandingComponent} from './landing/landing.component';
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

const routes: Routes = [
  {path: 'combineAll', component: CombineAllComponent},
  {path: 'combineLatest', component: CombineLatestComponent},
  {path: 'concat', component: ConcatComponent},
  {path: 'concatAll', component: ConcatAllComponent},
  {path: 'endWith', component: EndWithComponent},
  {path: 'forkJoin', component: ForkJoinComponent},
  {path: 'merge', component: MergeComponent},
  {path: 'mergeAll', component: MergeAllComponent},
  {path: 'pairwise', component: PairwiseComponent},
  {path: 'race', component: RaceComponent},
  {path: 'startWith', component: StartWithComponent},
  {path: 'withLatestFrom', component: WithLatestFromComponent},
  {path: 'zip', component: ZipComponent},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinationRoutingModule {
}
