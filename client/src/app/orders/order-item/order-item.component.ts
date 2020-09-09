import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../orders.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  order: IOrder;
  isBasket = false;
  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrder(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getOrder(id: number): void {
    this.ordersService.getOrderDetailed(id).subscribe((o: IOrder) => {
      this.order = o;
      console.log('object', o);
    });
  }
}
