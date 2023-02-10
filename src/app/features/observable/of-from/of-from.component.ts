import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg:any;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    //Of
    const observeOf = of('divya', 'grishma', 'kunjal');

    observeOf.subscribe((res) => {
      this.commonService.print(res, 'observOf');
      console.log('res :>> ', res);
    });

    const observeOf1 = of({ a: 'divya', b: 'grishma', c: 'kunjal' });

    observeOf1.subscribe((res) => {
      this.commonService.print(res, 'observO1f');
      this.obsMsg  = res;
      console.log('res :>> ', res);
    });

    const observeOf2 = from(['divya', 'grishma', 'kunjal']);
    
    observeOf2.subscribe((res)=>{
      this.commonService.print(res, 'observOf2');
      console.log('res :>> ', res);
    })

    const promise = new Promise(resolver=>{
      setTimeout(()=>{
        resolver('Promise Resolver')
      },3000)  
    });

    const observeOf3 = from(promise);

    observeOf3.subscribe((res)=>{
      this.commonService.print(res, 'observOf3');
      console.log('res :>> ', res);
    })


    const observeOf4 = from('Divya');
    
    observeOf4.subscribe((res)=>{
      this.commonService.print(res, 'observOf4');
      console.log('res :>> ', res);
    })
  }
}
