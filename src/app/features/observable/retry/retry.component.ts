import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, from, retry, retryWhen, scan, take } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  public details: any;
  public toggle: boolean = false;
  public status: string = 'No Data';
  public text: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getDetails() {
    this.toggle = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/commen')
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                this.status = 'Retring Attempt #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          this.details = res;
          this.toggle = false;
          this.status = 'Get data Successfully';
          this.text = true;
        },
        (err) => {
          console.log('err :>> ', err);
          this.status = 'Problem Getting data';
          this.toggle = false;
          this.text = false;
        }
      );
  }
}
