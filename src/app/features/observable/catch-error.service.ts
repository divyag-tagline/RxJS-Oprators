import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatchErrorService {

  constructor() { }

  handleError(err: HttpErrorResponse) {
    console.log('err :>> ', err);
    let errMsg = '';
    if (!err.error || !err.error.error) {
      errMsg = 'There is some issue';
    } else {
      if (err.error.error) {
        errMsg = 'You dont have permission';
      }
    }
    return throwError(errMsg);
  }
}
