import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from './react-components/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text = 'Click Me!';
  count = 0;

  props = {
    title: this.text,
    onClick: this.updateCount
  };

  ngOnInit() {
    ButtonComponent.initialize(this.props);
  }

  updateCount() {
    this.count++;
  }
}
