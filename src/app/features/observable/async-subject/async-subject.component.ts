import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: any;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.commonService.asyncVideoEmit.subscribe(
      (res) => (
        console.log('object :>> ', res),
        this.asyncVideoEmit = res)
    );
  }

  addVideo(video: any) {
    this.commonService.asyncVideoEmit.next(video.value);
    video.value = "";
  }

  onComplete() {
    this.commonService.asyncVideoEmit.complete();
  }
}
