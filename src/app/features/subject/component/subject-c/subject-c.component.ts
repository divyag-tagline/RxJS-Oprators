import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-subject-c',
  templateUrl: './subject-c.component.html',
  styleUrls: ['./subject-c.component.scss'],
})
export class SubjectCComponent implements OnInit {
  userName!: string;

  constructor(private commonService: CommonServiceService) {
    this.commonService.userName.subscribe((res) => (this.userName = res));
  }

  ngOnInit(): void {}

  onChange(uName: any) {
    console.log('uName.value :>> ', uName.value);
    this.commonService.userName.next(uName.value);
  }
}
