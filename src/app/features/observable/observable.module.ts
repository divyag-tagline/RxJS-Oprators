import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectModule } from '../subject/subject.module';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipComponent } from './zip/zip.component';
import { CatchthorwComponent } from './catchthorw/catchthorw.component';

@NgModule({
  declarations: [
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomobservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipComponent,
    CatchthorwComponent,
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SubjectModule
  ],
})
export class ObservableModule {}
