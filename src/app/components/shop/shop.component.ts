import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from './models/products.model';
import {Router} from '@angular/router';
import {ShopService} from './services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss', '../../app.component.scss']
})
export class ShopComponent implements OnInit {
  products: ProductModel[] = [];
  productsLoaded = false;
  imageLoaded = false;

  constructor(private fns: AngularFireFunctions, private shopService: ShopService, private router: Router) {
    const getProducts = this.fns.httpsCallable('stripeGetProducts');
    getProducts({}).subscribe((data: any) => {
      this.products = data.data;
      this.productsLoaded = true;
    });
  }

  ngOnInit() {

  }

  onImageLoad() {
    this.imageLoaded = true;
    console.log('iMage loaded', this.imageLoaded);
  }

  onClickProduct(productID: string) {
    // his.shopService.setSelectedProduct(p);
    this.router.navigate(['shop', productID]);
  }

  onLoad() {
    console.log('LOADED ---------------------');
  }


}
