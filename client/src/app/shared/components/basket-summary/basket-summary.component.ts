import { IBasket, IBasketItem } from './../../models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<
    IBasketItem
  >();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<
    IBasketItem
  >();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  basket$: Observable<IBasket>;
  @Input() isBasket = true;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem): void {
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: IBasketItem): void {
    this.increment.emit(item);
  }
  removeBasketItem(item: IBasketItem): void {
    this.remove.emit(item);
  }
}
