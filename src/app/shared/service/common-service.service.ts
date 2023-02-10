import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  print(counts: any,containerId:any) {
    let el = document.createElement('li');
    el.innerText = counts;
    document.getElementById(containerId)?.append(el);
  }
}
