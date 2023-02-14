import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeAll, of } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    const names = from([
      'divya',
      'grishma',
      'kunjal',
      'Parth',
      'Tejas',
      'Pihu',
      'Vani',
    ]);
    // ex - 01

    names
      .pipe(map((res) => this.getDetails(res)))
      .subscribe((res) =>
        res.subscribe((resp) => this.commonService.print(resp, 'map'))
      );

    //ex:02

    names
      .pipe(
        map((res) => this.getDetails(res)),
        mergeAll()
      )
      .subscribe((res) => this.commonService.print(res, 'mergeAll'));

    //ex : 03
    names
      .pipe(
        concatMap((res) => this.getDetails(res))
      )
      .subscribe((res) => this.commonService.print(res, 'ConcatMap'));
    //ex : 04
    names.pipe(
      concatMap(res => this.getDetails(res))
    )
      .subscribe((res) => this.commonService.prePrint(res, 'prepend'));
  }

  getDetails(name: any) {
    return of('My Name is' + ' ' + name).pipe(delay(2000));
  }
}
