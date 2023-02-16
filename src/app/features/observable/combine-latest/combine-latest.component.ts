import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  colors: string[] = ['pink', 'skyblue', 'green', 'red', 'blue', 'yellow'];
  names: string[] = [
    'divya',
    'grishma',
    'kunjal',
    'Parth',
    'Tejas',
    'Pihu',
    'Vani',
  ];
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      pluck('target', 'value')
    );

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value')
    );

    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'combineLatest');
    });

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      this.createBox(name, color, 'withLatestFrom');
    });
  }

  createBox(name: any, color: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = name;
    el.setAttribute(
      'style',
      `background-color:${color};`
    );
    document.getElementById(containerId)?.appendChild(el);
  }
}
