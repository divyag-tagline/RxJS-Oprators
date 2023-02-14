import { Component } from '@angular/core';
import { CommonServiceService } from './shared/service/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-operators';
  exclusive: Boolean = false;

  constructor(private commonService:CommonServiceService){
    this.commonService.exclusive.subscribe(res => this.exclusive = res);
  }
}
