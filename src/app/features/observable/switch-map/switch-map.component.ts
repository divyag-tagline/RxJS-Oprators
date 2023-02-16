import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  concat,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  from,
  map,
  of,
  pluck,
  switchAll,
  switchMap,
  toArray,
} from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';
import { Members } from '../map/map.component';
import { SwitchMapService } from '../switch-map.service';

export interface Search {
  thumb: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  @ViewChild('searchForm') searchForm!: NgForm;
  private members: Members[] = [
    {
      id: 1,
      name: 'Divya',
      gender: 'female',
    },
    {
      id: 2,
      name: 'Grishma',
      gender: 'female',
    },
    {
      id: 3,
      name: 'Pihu',
      gender: 'female',
    },
    {
      id: 4,
      name: 'Tejas',
      gender: 'male',
    },
    {
      id: 5,
      name: 'Parth',
      gender: 'male',
    },
    {
      id: 6,
      name: 'Pari',
      gender: 'female',
    },
    {
      id: 7,
      name: 'Vani',
      gender: 'female',
    },
  ];
  allDetails: any;
  searchCountResult!:number;

  constructor(
    private commonService: CommonServiceService,
    private switchMapService: SwitchMapService
  ) {}

  ngOnInit(): void {
    const names = from([
      'divya',
      'grishma',
      'kunjal',
      'Parth',
      'Tejas',
      'Pihu',
      'Vani',
    ]);

    const source = from(this.members);

    //ex : 01
    names
      .pipe(map((res) => this.getDetails(res)))
      .subscribe((res) =>
        res.subscribe((resp) => this.commonService.print(resp, 'map'))
      );

    //ex : 02
    names
      .pipe(
        map((res) => this.getDetails(res)),
        switchAll()
      )
      .subscribe((res) => this.commonService.print(res, 'switchAll'));

    //ex : 03
    names
      .pipe(switchMap((res) => this.getDetails(res)))
      .subscribe((res) => this.commonService.print(res, 'SwitchMap'));

    //ex  : 04
    source.pipe(toArray()).subscribe((res) => {
      return (this.allDetails = res);
    });
  }

  ngAfterViewInit(): void {
    console.log('working');

    // this.switchMapService.getSerches('angular').subscribe((res)=>{
    // console.log('res :>> ', res);
    // })
    const formValue = this.searchForm.valueChanges;

    formValue
      ?.pipe(
        // map(data => data.searchTerm)
        pluck('searchTerm'),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((data) => this.switchMapService.getSerches(data))
      )
      .subscribe((res) => {
        console.log('res :>> ', res);
        this.allDetails = res;
        this.searchCountResult = Object.keys(res).length;
      });
  }

  getDetails(name: any) {
    return of('My Name is' + ' ' + name).pipe(delay(2000));
  }
}
