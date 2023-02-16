import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CatchErrorService } from '../catch-error.service';
import { User } from '../exhaust-map/exhaust-map.component';
import { Details, Product } from '../share-replay/share-replay.component';
import { SwitchMapService } from '../switch-map.service';

interface Products {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
@Component({
  selector: 'app-catchthorw',
  templateUrl: './catchthorw.component.html',
  styleUrls: ['./catchthorw.component.scss'],
})
export class CatchthorwComponent implements OnInit {
  products!: Product[];

  constructor(private productService: SwitchMapService,private catchErrorService:CatchErrorService) {}

  ngOnInit(): void {}

  displayProduct() {
    this.productService.getProducts().pipe(
      
    ).subscribe(
      (res: Details) => {
        if (res) {
          this.products = res.products;
        }
      },
      (err) => {
        catchError(this.catchErrorService.handleError);
      }
    );
  }
}
