import { Component, OnInit } from '@angular/core';

// @Component is a decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SkiNet';

  constructor() {}

  ngOnInit(): void {}

  // Html'de variable'in bu sekilde kullanilmasina {{ title }} => interpolation deniyor
}
