import { Component } from '@angular/core';

// @Component is a decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SkiNet';

  // Html'de variable'in bu sekilde kullanilmasina {{ title }} => interpolation deniyor
}
