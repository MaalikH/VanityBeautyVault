import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Metadata, ProductModel} from '../models/products.model';
import {ShoppingCartItemModel} from '../models/sku.model';
import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private selectedProduct: BehaviorSubject<ProductModel> = new BehaviorSubject<ProductModel>({
    id: '',
    object: '',
    active: true,
    attributes: [],
    caption: '',
    created: 0,
    deactivate_on: [],
    description: '',
    images: [],
    livemode: true,
    metadata: {
        category: '',
        price: 0
    },
    name: '',
    package_dimensions: '',
    shippable: true,
    type: '',
    updated: 0,
    url: ''
  });
  selectedProductObs: Observable<ProductModel> = this.selectedProduct.asObservable();
  products: any;
  private categories: BehaviorSubject<string[]> = new BehaviorSubject([]);
  categoriesObs: Observable<string[]> = this.categories.asObservable();
  productsObs: Observable<any>;

  private shoppingCart: BehaviorSubject<ShoppingCartItemModel[]> = new BehaviorSubject<ShoppingCartItemModel[]>([]);
  shoppingCartObs: Observable<ShoppingCartItemModel[]> = this.shoppingCart.asObservable();

  constructor(private fns: AngularFireFunctions) { }

  setSelectedProduct(product: ProductModel) {
    this.selectedProduct.next(product);
  }

  getProductData() {
    const getProducts = this.fns.httpsCallable('stripeGetProducts');
    getProducts({}).subscribe((data: any) => {
      this.products = data.data;
      // this.productsLoaded = true;
    });
  }

  getProductDataObs() {
    const getProducts = this.fns.httpsCallable('stripeGetProducts');
    this.productsObs = getProducts({});
  }

  getCategories(products: ProductModel[]) {
    let arr = ['all'];
    for (let i = 0; i < products.length; i++) {
      if (!arr.includes(products[i].metadata.category)) {
        arr.push(products[i].metadata.category);
      }
    }
    console.log('CATEGORIES', arr);
    this.categories.next(arr);
  }

  getCart() {
    return this.shoppingCart.value;
  }

  addItemToCart(skus: ShoppingCartItemModel[]) {
    this.shoppingCart.next(skus);
  }
}
