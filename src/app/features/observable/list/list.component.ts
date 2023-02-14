import { Component, OnInit } from '@angular/core';

interface Header {
  name: string;
  link: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  headers: Header[] = [
    {
      name: 'From Event',
      link:'fromevent'
    },
    {
      name: 'Interval',
      link:'interval'
    },
    {
      name: 'Of From',
      link:'offrom'
    },
    {
      name: 'toArray',
      link:'toarray'
    },
    {
      name: 'Custome Observable',
      link:'customeobservable'
    },
    {
      name: 'Map',
      link:'map'
    },
    {
      name: 'Pluck',
      link:'pluck'
    },
    {
      name: 'Filter',
      link:'filter'
    },
    {
      name: 'Tap',
      link:'tap'
    },
    {
      name: 'Take',
      link:'take'
    },
    {
      name: 'Retry',
      link:'retry'
    },
    {
      name: 'Debounce - Time',
      link:'debounce'
    },
    {
      name: 'Subject',
      link:'subject'
    },
    {
      name: 'Replay - Subject',
      link:'replaysubject'
    },
    {
      name: 'Async - Subject',
      link:'async'
    },
    {
      name: 'Concat',
      link:'concat'
    },
    {
      name: 'Merge',
      link:'merge'
    },
    {
      name: 'Merge - Map',
      link:'mergemap'
    },
    {
      name: 'Concat - Map',
      link:'concatmap'
    },
    {
      name: 'Concat - Map',
      link:'concatmap'
    },
    {
      name: 'Switch - Map',
      link:'switchmap'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
