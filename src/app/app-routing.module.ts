import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'promise',
    loadChildren: () =>
      import('./features/promise/promise.module').then(
        (promise) => promise.PromiseModule
      ),
  },
  {
    path: 'observable',
    loadChildren: () =>
      import('./features/observable/observable.module').then(
        (promise) => promise.ObservableModule
      ),
  },
  {
    path:'**',
    redirectTo:'promise'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
