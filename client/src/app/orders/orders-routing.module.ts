import { OrderItemComponent } from './order-item/order-item.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  {
    path: ':id',
    component: OrderItemComponent,
    // data: { breadcrumb: { alias: 'orderItem' } },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
