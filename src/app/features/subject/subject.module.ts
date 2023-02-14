import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectAComponent } from './component/subject-a/subject-a.component';
import { SubjectBComponent } from './component/subject-b/subject-b.component';
import { SubjectCComponent } from './component/subject-c/subject-c.component';


@NgModule({
  declarations: [
    SubjectAComponent,
    SubjectBComponent,
    SubjectCComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  exports:[
    SubjectAComponent,
    SubjectBComponent,
    SubjectCComponent
  ]
})
export class SubjectModule { }
