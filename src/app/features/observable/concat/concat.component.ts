import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit {
  constructor(private commonService:CommonServiceService) {}

  ngOnInit(): void {
    const tech = interval(1000).pipe(
      map((video) => 'Tech Video ' + (video + 1)),
      take(5)
    );
    const comedy = interval(1000).pipe(
      map((video) => 'Comedy Video ' + (video + 1)),
      take(3)
    );
    const news = interval(1000).pipe(
      map((video) => 'News Video ' + (video + 1)),
      take(4)
    );
    const concatObs = concat(tech,comedy,news);
    concatObs.subscribe((res) => this.commonService.print(res,'concat'));
  }
}
