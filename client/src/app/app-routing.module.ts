import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
// import { ShopComponent } from './shop/shop.component';
// import { ProductDetailsComponent } from './shop/product-details/product-details.component';

// Web sitesine ulasilinca asagidaki component'larin hepsi kullanilmayacak da olsa otomatik olarak yukleniyor.
// Bu yuzden "shop" ta oldugu gibi lazy loading yapiyoruz
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'shop', component: ShopComponent },
  // { path: 'shop/:id', component: ProductDetailsComponent },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((mod) => mod.ShopModule),
  },
  {
    path: 'test-error',
    component: TestErrorComponent,
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  // forRoot, root module icin demek oluyor. appModules icin olusturulmus oluyor.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
