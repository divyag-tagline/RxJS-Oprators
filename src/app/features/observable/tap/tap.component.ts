import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    const source = interval(1500);
    //ex-01
    const name = ['divya', 'grishma', 'kunjal','Parth','Tejas','Pihu','Vani'];
    let subscription: Subscription;
    subscription = source
      .pipe(
        tap((res) => {
          if (res == 4) {
           subscription.unsubscribe()
          }
        }),
        map((data) => name[data])
      )
      .subscribe((res) => this.commonService.print(res, 'nameid'));
    //ex-02
    const color = ['pink', 'grishma', 'kunjal','Parth','Tejas','Pihu','Vani'];
    let subscription1: Subscription;
    subscription = source
      .pipe(
        tap((res) => {
          if (res == 4) {
           subscription.unsubscribe()
          }
        }),
        map((data) => name[data])
      )
      .subscribe((res) => this.commonService.print(res, 'nameid'));
  }
}
