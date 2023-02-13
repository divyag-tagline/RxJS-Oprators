import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

export interface Members {
  id: number;
  name: string;
  gender?:string;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  subscription!: Subscription;
  videoSub!: Subscription;
  msg: any;
  videoMsg: any;
  members = from([
    {
      id: 1,
      name: 'Divya',
    },
    {
      id: 2,
      name: 'Grishma',
    },
    {
      id: 3,
      name: 'Pihu',
    },
    {
      id: 4,
      name: 'Tejas',
    },
    {
      id: 5,
      name: 'Parth',
    },
    {
      id: 6,
      name: 'Pari',
    },
    {
      id: 7,
      name: 'Vani',
    },
  ]);

  constructor(private commonService:CommonServiceService) {}

  ngOnInit(): void {
    //Ex-01
    const broadCastVideo = interval(1000);
    this.subscription = broadCastVideo
      .pipe(
        map((data) => {
          return 'Video' + ' ' + data;
        })
      )
      .subscribe((res) => {
        // console.log('res :>> ', res)
        // if (res % 2 === 0) {
        this.msg = res;
        // }
      });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 10000);

    //Ex-02

    this.videoSub = broadCastVideo
      .pipe(
        map((data) => {
          return (data + 1) * 10;
        })
      )
      .subscribe((res) => {
        console.log('res :>> ', res);
        this.videoMsg = res;
      });
    setTimeout(() => {
      this.videoSub.unsubscribe();
    }, 20000);

    //Ex-03
    this.members.pipe(
      map(data => data.name)
    )
    .subscribe((res)=>{
      this.commonService.print(res,'nameinfo')
    })
  }
}
