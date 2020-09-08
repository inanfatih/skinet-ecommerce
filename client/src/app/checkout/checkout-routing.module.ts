import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: CheckOutComponent },
  { path: 'success', component: CheckoutSuccessComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
