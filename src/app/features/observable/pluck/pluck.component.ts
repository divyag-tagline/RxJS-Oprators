import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

interface User {
  name: string;
  skill: string;
  job: Job;
}

interface Job {
  title: string;
  exp: string;
}
@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  users: User[] = [
    {
      name: 'divya',
      skill: 'Angular',
      job: {
        title: 'Frontend Devloper',
        exp: '10 Years',
      },
    },
    {
      name: 'grishma',
      skill: 'Javascript',
      job: {
        title: 'Javascript Devloper',
        exp: '5 Years',
      },
    },

    {
      name: 'kunjal',
      skill: 'Html',
      job: {
        title: 'Html   Devloper',
        exp: '3 Years',
      },
    },
    {
      name: 'Pihu',
      skill: 'Node JS',
      job: {
        title: 'Backend Devloper',
        exp: '2 Years',
      },
    },
  ];
  data: any;
  titles: any;

  constructor() {}

  ngOnInit(): void {
    //ex-1
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        this.data = res;
      });
    //ex-3
    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => {
        this.titles = res;
        console.log('res :>> ', res);
      });
  }
}
