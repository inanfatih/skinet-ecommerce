import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from './../shared/models/brand';
import { IType } from './../shared/models/productType';
import { map } from 'rxjs/operators';

// Service'lerde @Injectable var
// Angular services are singleton. They are initialized when the application starts
// Dependency injection icin service'leri tercih etmek, component'lardan daha uygun
@Injectable({
  providedIn: 'root', // Buradaki root => app.module.ts e refer ediyor.
})
export class ShopService {
  baseUrl = ' https://localhost:5001/api/';
  constructor(private http: HttpClient) {}

  getProducts(brandId?: number, typeId?: number, sort?: string): any {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    if (sort) {
      params = params.append('sort', sort);
    }

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

  getBrands(): any {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes(): any {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
