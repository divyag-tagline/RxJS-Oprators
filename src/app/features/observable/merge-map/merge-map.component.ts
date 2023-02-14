import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
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

    // ex - 02

    names
      .pipe(
        map((res) => this.getDetails(res)),
        mergeAll()
      )
      .subscribe((res) => this.commonService.print(res, 'mergeAll'));

    //ex-03

    names
      .pipe(mergeMap((res) => this.getDetails(res)))
      .subscribe((res) => this.commonService.print(res, 'mergeMap'));
  }

  getDetails(name: any) {
    return of('My Name is' + ' ' + name);
  }
}
