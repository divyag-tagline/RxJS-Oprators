import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'fromevent',
        component: FromEventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'offrom',
        component: OfFromComponent,
      },
      {
        path:'toarray',
        component:ToArrayComponent
      },
      {
        path:'customeobservable',
        component:CustomobservableComponent
      },
      {
        path:'map',
        component:MapComponent
      },
      {
        path:'pluck',
        component:PluckComponent
      },
      {
        path:'filter',
        component:FilterComponent
      },
      {
        path:'tap',
        component:TapComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
