import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { Members } from '../map/map.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
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
  public details: any;
  public users: any;
  public allDetails : any;
  constructor() {}

  ngOnInit(): void {
    const source = from(this.members);

    //Ex - 01
    source
      .pipe(
        filter((member) => member.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        return (this.details = res);
      });

    //Ex - 02
    source
      .pipe(
        filter((member) => member.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        return (this.users = res);
      });

    //Ex - 03
    source
      .pipe(
        filter((member) => member.id < 4),
        toArray()
      )
      .subscribe((res) => {
        return (this.allDetails = res);
      });
  }
}
