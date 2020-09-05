import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: CheckOutComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
