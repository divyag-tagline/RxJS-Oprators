import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, take, toArray } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  sourceSub!: Subscription;
  users = [
    {
      name: 'divya',
      skill: 'angular',
    },
    {
      name: 'grishma',
      skill: 'react ',
    },
    {
      name: 'kunjal',
      skill: 'angular',
    },
  ];
  usersDetails: any;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    const source = interval(1000);

    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log('res :>> ', res);
      this.commonService.print(res, 'observArray');
      // if (res <= 8) {
      // this.sourceSub.unsubscribe()
      // }
    });
    const source1 = from(this.users);

    source1.pipe(toArray()).subscribe((res) => {
      this.usersDetails = res;
      console.log('res :>> ', this.usersDetails);
    });
  }
}
