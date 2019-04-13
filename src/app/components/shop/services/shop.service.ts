import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Metadata, ProductModel} from '../models/products.model';
import {ShoppingCartItemModel} from '../models/sku.model';

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
    },
    name: '',
    package_dimensions: '',
    shippable: true,
    type: '',
    updated: 0,
    url: ''
  });
  selectedProductObs: Observable<ProductModel> = this.selectedProduct.asObservable();

  private shoppingCart: BehaviorSubject<ShoppingCartItemModel[]> = new BehaviorSubject<ShoppingCartItemModel[]>([]);
  shoppingCartObs: Observable<ShoppingCartItemModel[]> = this.shoppingCart.asObservable();

  constructor() { }

  setSelectedProduct(product: ProductModel) {
    this.selectedProduct.next(product);
  }

  getCart() {
    return this.shoppingCart.value;
  }

  addItemToCart(skus: ShoppingCartItemModel[]) {
    this.shoppingCart.next(skus);
  }
}
