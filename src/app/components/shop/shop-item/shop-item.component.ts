import { Component, OnInit } from '@angular/core';
import {ShopService} from '../services/shop.service';
import {ProductModel} from '../models/products.model';
import {AngularFireFunctions} from '@angular/fire/functions';
import {ActivatedRoute} from '@angular/router';
import {AttributeModel, Datum, SelectedAttributeModel, ShoppingCartItemModel, SKUsModel} from '../models/sku.model';
import {forkJoin} from 'rxjs';
import {toString} from '@ng-bootstrap/ng-bootstrap/util/util';
import * as _ from 'lodash';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss', '../../../app.component.scss']
})
export class ShopItemComponent implements OnInit {
  product: ProductModel;
  productID: string;
  productAttributesCategories: string[] = [];
  productAttributes: AttributeModel[] = [];
  skus: SKUsModel;
  productLoaded = false;
  selectedAttributes: SelectedAttributeModel[] = [];

  constructor(private shopService: ShopService, private fns: AngularFireFunctions, private route: ActivatedRoute) {
    this.productID = this.route.snapshot.paramMap.get('productID');
    const getProduct = this.fns.httpsCallable('stripeGetProduct');
    const getSKUs = this.fns.httpsCallable('stripeGetSKUs');

    // CALLS TO GET PRODUCTS THEN GET SKUS OF PRODUCTS
    forkJoin(getProduct({productID: this.productID}), getSKUs({productID: this.productID})).subscribe((data: any) => {
      this.product = data[0];
      // GET PRODUCT ATTRIBUTES TO HOLD IN ARRAY FOR DISPLAY
      for (let i = 0; i < this.product.attributes.length; i++) {
        const productAttribute: AttributeModel = {
          name: this.product.attributes[i],
          options: [],
          selected: ''
        };
        this.productAttributes.push(productAttribute);
        this.productAttributesCategories.push(this.product.attributes[i]);
      }
      // SET SELECTED PRODUCT ATTRIBUTE OF EACH ATTRIBUTE
      setTimeout(() => {
        for (let i = 0; i < this.productAttributes.length; i++) {
          this.productAttributes[i].selected = this.productAttributes[i].options[0];
        }
      }, 10);
      // FOR DISPLAY PURPOSES
      this.productLoaded = true;

      this.skus = data[1];
      // LOOP THROUGH SKUS
      for (let i = 0; i < this.skus.data.length; i++) {
        // LOOP THROUGH SKU OBJECT KEYS
        for (let key of Object.keys(this.skus.data[i].attributes)) {
          const objectKey = key;
          const objectOption = this.skus.data[i].attributes[key];
          // LOOP THROUGH PRODUCT ATTRIBUTES ARRAY
          for (let object of this.productAttributes) {
            // IF PRODUCT ATTRIBUTES ARRAY OBJECT IS EQUAL TO KEY....
            if (object.name === objectKey) {
              let exist = false;
              for (let option of object.options) {
                // IF OPTION IS IN ARRAY WE WONT ADD IT
                if (option === objectOption) {
                  exist = true;
                }
              }
                // ELSE WE ADD IT
              if (exist === false) {
                object.options.push(objectOption);
              }
            }
            this.productLoaded = true;
          }
        }
      }
    });
  }

  ngOnInit() {
      this.shopService.shoppingCartObs.subscribe((data: any) => {
        console.log('SHOPPING CART CHANGED', data);
      });
  }

  selectAttribute(attribute: string, option: string) {
    const selectedAttribute: SelectedAttributeModel = {
      attributeName: attribute,
      attributeValue: option
    };
    for (let i = 0; i < this.productAttributes.length; i++) {
      if (attribute === this.productAttributes[i].name) {
        this.productAttributes[i].selected = option;
      }
    }
    // console.log('Attribute', attribute, 'Option', option);
  }

  addItemToCart(attributes: AttributeModel[]) {

    if (attributes.length > 0) {
      const attributesObj = {};
      for (const key of attributes) {
        attributesObj[key.name] = key.selected;
      }
      const getSKUByCategory = this.fns.httpsCallable('stripeGetSKUByCategory');
      const shoppingCartItem: ShoppingCartItemModel = {
        sku: '',
        quantity: 1
      };
      getSKUByCategory({productID: this.productID, attributes: attributesObj}).subscribe((data: any) => {
        console.log('DATA', data.data[0].id);
        shoppingCartItem.sku = data.data[0].id;
        const tempCart = this.shopService.getCart();
        if (!!tempCart.find(x => x.sku === shoppingCartItem.sku)) {
          tempCart.find(o => o.sku === shoppingCartItem.sku).quantity++;
        } else {
          tempCart.push(shoppingCartItem);
        }
        console.log('Temp Cart', tempCart);
        this.shopService.addItemToCart(tempCart);
      });
    }
  }
}
