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
        (observable) => observable.ObservableModule
      ),
  },
  {
    path: 'subject',
    loadChildren: () =>
      import('./features/subject/subject.module').then(
        (subject) => subject.SubjectModule
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
