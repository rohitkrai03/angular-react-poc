import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Click Me!';
  type = 'button';
  count = 0;

  updateCount() {
    this.count++;
  }
}

