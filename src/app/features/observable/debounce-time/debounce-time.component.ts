import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;
  @ViewChild('search1') search1!: ElementRef;
  reqData: any = null;
  reqData1: any = null;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    //ex:01
    const searchTerm = fromEvent(this.search.nativeElement, 'keyup');

    searchTerm
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(2000)
      )
      .subscribe((res) => {
        this.reqData = res;
        setTimeout(() => {
          this.reqData = null;
        }, 2000);
      });
    //ex:02
    const searchTerm1 = fromEvent(this.search1.nativeElement, 'keyup');

    searchTerm1
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.reqData1 = res;
        console.log('res :>> ', res);
        // setTimeout(() => {
        //   this.reqData1 = null;
        // }, 2000);
      });
  }
  // click() {
  //   const searchTerm = fromEvent(this.search.nativeElement, 'keyup');
  //   searchTerm.pipe(
  //     map((event: any) => event.target.value),
  //     debounceTime(2000)
  //   ).subscribe((res)=>console.log('res :>> ', res))
  // }
}
