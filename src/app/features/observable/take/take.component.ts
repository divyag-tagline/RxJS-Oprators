import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  private name = [
    'divya',
    'grishma',
    'kunjal',
    'Parth',
    'Tejas',
    'Pihu',
    'Vani',
  ];
  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    let names = from(this.name);
    //ex : 1 take(5)
    names.pipe(take(5)).subscribe((res) => {
      this.commonService.print(res, 'names');
    });

    //ex:2 takeLast(5)
    names.pipe(takeLast(3)).subscribe((res) => {
      this.commonService.print(res, 'name');
    });

    //ex:3 takeUntil(5)
    const source = interval(1000);
    let condtion = timer(5000);
    let condtion1 = fromEvent(document,'keyup')
    source.pipe(
      map(num => "Number " +   num),
      takeUntil(condtion1)

      ).subscribe((res) => {
      this.commonService.print(res, 'takeuntil');
    });
  }
}
