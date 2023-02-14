import { Component, OnInit } from '@angular/core';
import { interval, map, take, concat, merge } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private commonService:CommonServiceService) {}

  ngOnInit(): void {
    const tech = interval(3000).pipe(
      map((video) => 'Tech Video ' + (video + 1)),
      take(5)
    );
    const comedy = interval(1500).pipe(
      map((video) => 'Comedy Video ' + (video + 1)),
      take(3)
    );
    const news = interval(2500).pipe(
      map((video) => 'News Video ' + (video + 1)),
      take(4)
    );
    const concatObs = merge(tech,comedy,news);
    concatObs.subscribe((res) => this.commonService.print(res,'concat'));
  }

}
