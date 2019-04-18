import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from 'ngx-stripe';
import {ShopService} from '../services/shop.service';
import {AttributeModel, ShoppingCartItemModel} from '../models/sku.model';
import {AngularFireFunctions} from '@angular/fire/functions';
import { AlertService } from '../../../services/alert-service/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss',  '../../../app.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  shoppingCart: ShoppingCartItemModel[] = [];
  shoppingCartTotal = 0;
  shippingTotal = 600;
  cardError: string;
  customerEmail: string;
  emailValid = false;
  shippingValid = false;
  paymentSubmitted = false;
  paymentSameAsBilling = true;
  purchaseTryng = false;
  objectKeys = Object.keys;
  shipping = {
    firstName: '',
    lastName: '',
    address1: '',
    country: '',
    city: '',
    state: '',
    zipcode: ''
  };
  payment = {
    firstName: '',
    lastName: '',
    address1: '',
    country: '',
    city: '',
    state: '',
    zipcode: ''
  };

  elements: Elements;
  card: StripeElement;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private shopService: ShopService, private fns: AngularFireFunctions,
    private alertService: AlertService,
    private router: Router) {
  }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });

    this.shopService.shoppingCartObs.subscribe((data: ShoppingCartItemModel[]) => {
      this.shoppingCart = data;
      for (let i = 0; i < this.shoppingCart.length; i++) {
        const itemTotal = this.shoppingCart[i].price * this.shoppingCart[i].quantity;
        this.shoppingCartTotal = this.shoppingCartTotal + itemTotal;
      }
    });
  }

  buy() {
    this.purchaseTryng = true;
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, {name})
      .subscribe(result => {
        if (result.token) {

          const skuItems = [];
          for (let i = 0; i < this.shoppingCart.length; i++) {
            const skuObject = {
              type: 'sku',
              parent: '',
              quantity: 0
            };
            skuObject.quantity = this.shoppingCart[i].quantity;
            skuObject.parent = this.shoppingCart[i].parent;
            skuItems.push(skuObject);
          }
          const createOrder = this.fns.httpsCallable('stripeCreateOrder');
          createOrder({email: this.customerEmail, name: `${this.shipping.firstName} ${this.shipping.lastName}`, items: skuItems, line1: this.shipping.address1, city: this.shipping.city, state: this.shipping.state, country: 'us', postal_code: this.shipping.zipcode}).subscribe((data: any) => {
            if (data.id) {
              const cus = data.customer;
              const payOrder = this.fns.httpsCallable('stripePayOrder');
              payOrder({orderID: data.id, source: result.token.id, customer: this.customerEmail}).subscribe((purchaseData: any) => {
                const updateCharge = this.fns.httpsCallable('stripeUpdateCharge');
                updateCharge({charge: purchaseData.charge, email: this.customerEmail}).subscribe((chargeUpdateData: any) => {
                });
                this.router.navigate(['/home']);
                this.alertService.newAlert('success', 'Your order was successful, please check your email for confirmation', true, true, 'Purchase Success!');
                this.shopService.resetShoppingCartItem();
                this.purchaseTryng = false;
              }, err => {
                this.purchaseTryng = false;
                this.alertService.newAlert('danger', 'There was an error while processing your order. Please validate your info and try again', true, true, 'OH NO!');
              });
            }
          }, err => {
            this.purchaseTryng = false;
            this.alertService.newAlert('danger', 'There was an error while processing your order. Please validate your info and try again', true, true, 'OH NO!');
          });
        } else if (result.error) {
          this.cardError = result.error.message;
        }
      });
  }

  onSubmitEmail() {
    this.emailValid = true;
  }

  onSubmitShipping() {
    this.shippingValid = true;
  }

  onSubmitPayment() {
    this.paymentSubmitted = true;
  }

  onPaymentSameAsBillingSubmit() {
    this.payment = this.shipping;
    this.paymentSubmitted = true;
  }

  removeItemFromCart(item: ShoppingCartItemModel, index: number) {
    let tempCart = this.shopService.getCart();
    tempCart.splice(index, 1);
    // console.log('ENW CARRT', tempCart);
  }

}
