import { Component, OnInit } from '@angular/core';
import { concatMap, map, Observable, shareReplay } from 'rxjs';
import { SwitchMapService } from '../switch-map.service';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface Details {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  products!:Observable<any>;
  // products!:Product[];
  men!: Observable<any>;
  jewelery!: Observable<any>;
  sumsung!: Product[];

  constructor(private productService: SwitchMapService) {}

  ngOnInit(): void {
    // this.productService.displyProducts().subscribe((res: any) => {
    //   if (res) {
    //     console.log('res :>> ', res);
    //     this.products = res;
    //   }
    // });
    this.products = this.productService.displyProducts().pipe(shareReplay());
    this.men = this.products.pipe(
      map(res=>res.filter((menData:any) => {return menData['category'] == "men's clothing"}))
    )
    this.jewelery = this.products.pipe(
      map(res=>res.filter((menData:any) => {return menData['category'] == "jewelery"}))
    )
    // console.log(this.product.pipe(
    // ));
  }

  // displayProduct() {
  //   this.productService.displyProducts().subscribe((res: Details) => {
  //     if (res) {
  //       this.products = res.products;
  //     }
  //   });
  // }
}
