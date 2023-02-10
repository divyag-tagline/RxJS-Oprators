import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromiseRoutingModule } from './promise-routing.module';
import { PromisesComponent } from './promises/promises.component';
import { ObservableComponent } from '../observable/observable/observable.component';


@NgModule({
  declarations: [
    PromisesComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    PromiseRoutingModule
  ]
})
export class PromiseModule { }
