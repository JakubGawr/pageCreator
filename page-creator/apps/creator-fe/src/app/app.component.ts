import { Component } from '@angular/core';

@Component({
  selector: 'page-creator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'creator-fe';

  someFn(arg) {
    if (typeof arg === 'string') {
    }
    if (typeof arg === 'number') {
    }
    if (typeof arg === 'boolean') {
    }
  }
}
