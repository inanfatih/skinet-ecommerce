import { CheckoutRoutingModule } from './checkout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out.component';

@NgModule({
  declarations: [CheckOutComponent],
  imports: [CommonModule, CheckoutRoutingModule],
})
export class CheckoutModule {}
