import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit {
  @ViewChild('addbtn') addbtn!: ElementRef;
  constructor(private commonService:CommonServiceService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe((res) => {
      let countVal = 'Video' + ' ' + count++;
      console.log(countVal);
      this.commonService.print(countVal,'eleContainer');
      this.commonService.print(countVal,'eleContainers');
    });
  }

  
}
