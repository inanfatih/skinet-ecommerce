import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from './../shared/models/brand';
import { IType } from './../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from './../shared/models/shopParams';
import { IProduct } from '../shared/models/product';

// Service'lerde @Injectable var
// Angular services are singleton. They are initialized when the application starts
// Dependency injection icin service'leri tercih etmek, component'lardan daha uygun
@Injectable({
  providedIn: 'root', // Buradaki root => app.module.ts e refer ediyor.
})
export class ShopService {
  baseUrl = ' https://localhost:5001/api/';
  constructor(private http: HttpClient) {}

  // Typescript class'lari asagidaki gibi yeni bir data type olarak da kullanilabilir
  getProducts(shopParams: ShopParams): any {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);

    params = params.append('pageIndex', shopParams.pageNumber.toString());

    params = params.append('pageSize', shopParams.pageSize.toString());

    return this.http
      .get<IPagination>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  getProduct(id: number): any {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands(): any {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes(): any {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
