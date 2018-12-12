import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Button } from './button';
import { ButtonComponent } from './button.component';

const components = [ButtonComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA],
})
export class ButtonModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Button', () => Button);
  }
}
