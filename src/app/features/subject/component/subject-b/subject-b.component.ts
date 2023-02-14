import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-subject-b',
  templateUrl: './subject-b.component.html',
  styleUrls: ['./subject-b.component.scss'],
})
export class SubjectBComponent implements OnInit {
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
