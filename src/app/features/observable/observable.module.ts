import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';


@NgModule({
  declarations: [
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomobservableComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class ObservableModule { }
