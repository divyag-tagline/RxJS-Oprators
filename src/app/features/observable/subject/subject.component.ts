import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName!: string;

  constructor(private commonService: CommonServiceService) {
    this.commonService.exclusive.next(true);
    this.commonService.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.commonService.exclusive.next(false);
  }
}
