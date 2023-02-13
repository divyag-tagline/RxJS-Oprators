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
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';

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
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class ObservableModule {}
