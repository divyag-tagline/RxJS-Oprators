import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.scss'],
})
export class CustomobservableComponent implements OnInit {
  techStatus!: string;
  customStatus!: string;
  nameStatus!: string;
  subscription!: Subscription;
  names: any;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    //ex-1 manual
    const manObs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('TypeScript');
      }, 2000);
      setTimeout(() => {
        observer.next('Html CSS');
      }, 3000);
      setTimeout(() => {
        observer.next('JavaScript');
        // observer.error(new Error('Limit Exceed'));
      }, 4000);
      setTimeout(() => {
        observer.next('jquery');
        observer.complete();
      }, 5000);
    });
    manObs.subscribe(
      (res: any) => {
        this.commonService.print(res, 'manobs');
      },
      (err: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    //ex - 2 (custom)
    const arr = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'jquery'];
    const cusObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count]);

        if (count >= 4) {
          observer.error('error emit');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    this.subscription = cusObs.subscribe(
      (res: any) => {
        this.commonService.print(res, 'cusobs');
      },
      (err: any) => {
        this.customStatus = 'error';
      },
      () => {
        this.customStatus = 'completed';
      }
    );

    //ex - 3 (Random Names)
    const stringArr = ['divya', 'grishma', 'kunjal', 'Tejas', 'Parth', 'Pihu'];
    const rendomObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(stringArr[count]);

        if (count >= 3) {
          observer.error('error emit');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    rendomObs.subscribe(
      (res: any) => {
        this.names = res;
      },
      (err: any) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
