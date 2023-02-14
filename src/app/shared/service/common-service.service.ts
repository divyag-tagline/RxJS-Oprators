import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Divya');
  videoEmit = new ReplaySubject<string>(3,5000);
  asyncVideoEmit = new AsyncSubject<string>();

  constructor() {}

  print(counts: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = counts;
    document.getElementById(containerId)?.append(el);
  }

  prePrint(counts: any, containerId: any) {
    let el = document.createElement('li');
    // for add class
    // el.setAttribute('class','<className>')
    el.innerText = counts;
    document.getElementById(containerId)?.prepend(el);
  }
}
