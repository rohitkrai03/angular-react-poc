import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from './react-components/button.component';
import { ButtonProps } from './react-components/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Click Me!';
  count = 0;

  protected getProps(): ButtonProps {
    return {
      title: this.title,
      onClick: this.updateCount
    };
  }

  ngOnInit() {
    ButtonComponent.clickEvent.subscribe(val => this.updateCount());
    ButtonComponent.initialize(this.getProps());
  }

  onChange() {
    ButtonComponent.initialize(this.getProps());
  }

  updateCount() {
    this.count++;
  }
}

/**
 * const template = fs.readFileSync(path.join(__dirname, ‘./pluginExtensions.template.hbs’), ‘utf8’);
 * const rendered = Mustache.render(template, theDataToTheTemplate);
 * reflect Metadata
 */
