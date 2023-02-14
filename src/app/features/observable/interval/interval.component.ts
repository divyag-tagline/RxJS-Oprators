import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit,OnDestroy {
  obsMsg: any;
  videoSubscription!: Subscription;
  constructor(private commonService:CommonServiceService) {}

  ngOnInit(): void {
    // const broadCastVideoes = interval(1000);
    const broadCastVideoes = timer(5000,1000);
    this.videoSubscription = broadCastVideoes.subscribe((res) => {
      this.obsMsg = 'Video' + ' ' + res;
      this.commonService.print(this.obsMsg,'eleContiner');
      this.commonService.print(this.obsMsg,'eleContiner1');
      this.commonService.print(this.obsMsg,'eleContiner2');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe()
  }
}
