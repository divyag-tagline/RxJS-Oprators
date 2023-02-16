import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, pluck, take, zip } from 'rxjs';
@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

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
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      take(2)
    )

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      take(3)
    );

    //ex:01

    zip(nameObs, colorObs).subscribe(([name, color]: any) => {
      this.createBox(name, color, 'zip');
    });
    //ex:02

    forkJoin(nameObs, colorObs).subscribe(([name, color]: any) => {
      this.createBox(name, color, 'forkJoin');
    });
  }

  createBox(name: any, color: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = name;
    el.setAttribute('style', `background-color:${color};`);
    document.getElementById(containerId)?.appendChild(el);
  }
}
