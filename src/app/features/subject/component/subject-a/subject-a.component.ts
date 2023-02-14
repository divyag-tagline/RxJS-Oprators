import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-subject-a',
  templateUrl: './subject-a.component.html',
  styleUrls: ['./subject-a.component.scss']
})
export class SubjectAComponent implements OnInit {
  userName !:string ;
  isSubject:any = new Subject<any>()
  isBehav:any = new BehaviorSubject<any>('')

  constructor(private commonService:CommonServiceService) { 
    this.commonService.userName.subscribe(res=>this.userName = res);
 
  }

  ngOnInit(): void {
  }

  onChange(uName:any){
    // this.commonService.userName.next(uName.value);
    console.log('uName.value :>> ', uName.value);
    this.isSubject.next(uName.value);
    this.isBehav.next(uName.value);
  }

  getData(){
    this.isSubject.subscribe((isSubject:any) => {
      console.log('isSubject :>> ', isSubject);
    });
    this.isBehav.subscribe((isBehav:any) => {
      console.log('isBehav :>> ', isBehav);
    });
  }

}
