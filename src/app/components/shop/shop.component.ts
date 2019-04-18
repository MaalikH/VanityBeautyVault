import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from './models/products.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from './services/shop.service';
import {element} from 'protractor';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import * as _ from 'lodash';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss', '../../app.component.scss']
})
export class ShopComponent implements OnInit {
  products: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  productsLoaded = false;
  imageLoaded = false;
  categories: string[];
  activeCategory = 'all';
  lashLength = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '8-15', '10-17', '14-19'];
  lashCurl = ['C', 'D', 'CC', 'DD'];

  constructor(private fns: AngularFireFunctions, private shopService: ShopService, private router: Router,
              private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any,
              private route: ActivatedRoute) {

    /**
    const getProducts = this.fns.httpsCallable('stripeGetProducts');
    getProducts({}).subscribe((data: any) => {
      this.products = data.data;
      this.productsLoaded = true;
      console.log('PRODUCTS LOADED');
    });
     **/


  }

  ngOnInit() {
    // this.products = this.shopService.products;
    this.shopService.productsObs.subscribe((data: any) => {
      this.products = data.data;
      this.getCategories(this.products);
      this.filterProducts(this.activeCategory);
    });
    // this.createSKUS('prod_EuHHFr4xxjQQ4M');
    setTimeout( () => {
      this.productsLoaded = true;
    }, 500)

  }

  createSKUS(productID: string) {
    for (let i = 0; i < this.lashLength.length; i++) {
      for (let j = 0; j < this.lashCurl.length; j++) {
        const createSKU = this.fns.httpsCallable('stripeCreateSKU');
        createSKU({
          id: productID,
          attributes: {
            length: this.lashLength[i],
            curl: this.lashCurl[j]
          },
          price: 1999,
          inventory: {
            type: 'infinite'
          }
        }).subscribe((data: any) => {
        });
      }
    }
  }

  changeCategory(category: string) {
    this.activeCategory = category;
    this.filterProducts(this.activeCategory);
  }

  getCategories(products: ProductModel[]) {
    let arr = ['all'];
    for (let i = 0; i < products.length; i++) {
      if (!arr.includes(products[i].metadata.category)) {
        arr.push(products[i].metadata.category);
      }
    }
    console.log('CATEGORIES', arr);
    this.categories = (arr);
  }

  filterProducts(type: string) {
    this.activeCategory = type;
    if (type === 'all' || type === null) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = _.filter(this.products, item => item.metadata.category === this.activeCategory);
    }
  }

  scrollToProducts() {
  this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.products',
    scrollOffset: 60
  });
}

  onImageLoad() {
    this.imageLoaded = true;
  }

  onClickProduct(productID: string) {
    // his.shopService.setSelectedProduct(p);
    this.router.navigate(['shop', productID]);
  }

  scrollToElement(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }


}
