import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IOrder } from './../shared/models/order';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrdersForUser(): any {
    return this.http.get(this.baseUrl + 'orders');
  }

  getOrderDetailed(id: number): any {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
}
