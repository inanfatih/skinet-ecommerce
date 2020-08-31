import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Component is a decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SkiNet';
  products: any[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
      (response: any) => {
        this.products = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Html'de variable'in bu sekilde kullanilmasina {{ title }} => interpolation deniyor
}
