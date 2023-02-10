import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  promiseValue!:any;
  constructor() {}

  ngOnInit(): void {
    let buyLeptop = new Promise((resolve, reject) => {
      if (this.dellAvaiable()) {
        setTimeout(() => {
          resolve('Dell is Purchased');
        }, 3000);
      } else if (this.HpAvaiable()) {
        setTimeout(() => {
          resolve('HP is Purchased');
        }, 3000);
      } else {
        reject('Leptop is not available in stor');
      }
    });
    buyLeptop
      .then((res) => {
        this.promiseValue = res;
        console.log('res :>> ', res);
      })
      .catch((err) => {
        this.promiseValue = err;
        console.log('err :>> ', err);
      });
  }

  dellAvaiable() {
    return true;
  }
  HpAvaiable() {
    return false;
  }
}
