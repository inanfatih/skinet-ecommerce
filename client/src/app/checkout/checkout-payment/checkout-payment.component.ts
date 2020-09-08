import { Router, NavigationExtras } from '@angular/router';
import { IOrder } from './../../shared/models/order';
import { IBasket } from './../../shared/models/basket';
import { ToastrService } from 'ngx-toastr';
import { CheckOutService } from './../check-out.service';
import { BasketService } from './../../basket/basket.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  constructor(
    private basketService: BasketService,
    private checkoutService: CheckOutService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitOrder(): void {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.createOrder(orderToCreate).subscribe(
      (order: IOrder) => {
        this.toastr.success('Order created successfully');
        this.basketService.deleteLocalBasket(basket.id);
        const navigationExtras: NavigationExtras = { state: order };
        this.router.navigate(['checkout/success'], navigationExtras);
      },
      (error) => {
        console.log('error', error);
        this.toastr.error(error);
      }
    );
  }
  getOrderToCreate(basket: IBasket): any {
    return {
      basketId: basket.id,
      deliveryMethod: +this.checkoutForm
        .get('deliveryForm')
        .get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value,
    };
  }
}
