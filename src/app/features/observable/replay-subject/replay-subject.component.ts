import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  public videoList: string[] = ['Angular', 'ReactJS'];
  public videoListA: string[] = [];
  public videoListB: string[] = [];
  public subscribeModeUserA: boolean = false;
  public subscribeModeUserB: boolean = false;
  subscriptionA!: Subscription;
  subscriptionb!: Subscription;
  public interValToggle: boolean = false;
  subscribeToggle!: Subscription;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.commonService.videoEmit.subscribe((res) => {
      this.videoList.push(res);
    });
  }

  addVideo(video: any) {
    console.log('video.value :>> ', video.value);
    this.commonService.videoEmit.next(video.value);
    video.value = '';
  }

  userASubscribe() {
    if (this.subscribeModeUserA) {
      this.subscriptionA.unsubscribe();
    } else {
      this.subscriptionA = this.commonService.videoEmit.subscribe((res) => {
        this.videoListA.push(res);
      });
    }
    this.subscribeModeUserA = !this.subscribeModeUserA;
  }
  userBSubscribe() {
    if (this.subscribeModeUserB) {
      this.subscriptionb.unsubscribe();
    } else {
      this.subscriptionb = this.commonService.videoEmit.subscribe((res) => {
        this.videoListB.push(res);
      });
    }
    this.subscribeModeUserB = !this.subscribeModeUserB;
  }

  toggleMethod() {
    const broadCastVideo = interval(1000);
    if (!this.interValToggle) {
      this.subscribeToggle = broadCastVideo.subscribe((res) => {
        this.commonService.videoEmit.next('Video' + ' ' + res);
      });
    } else {
      this.subscribeToggle.unsubscribe();
    }
    this.interValToggle = !this.interValToggle;
  }
}
