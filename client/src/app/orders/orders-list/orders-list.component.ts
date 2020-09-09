import { OrdersService } from './../orders.service';
import { IOrder } from './../../shared/models/order';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orders: IOrder[];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
    console.log('orders', this.orders);
  }

  getOrders(): void {
    this.ordersService.getOrdersForUser().subscribe(
      (orders: IOrder[]) => {
        this.orders = orders;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
