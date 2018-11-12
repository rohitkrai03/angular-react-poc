import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './button';
import { Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class ButtonComponent {
  private static _clickEvent: BehaviorSubject<boolean> = new BehaviorSubject(false);

  static get clickEvent() {
    return this._clickEvent.asObservable();
  }

  static initialize(props) {
    ReactDOM.render(<Button title={props.title} onClick={() => this._clickEvent.next(true) }/>, document.getElementById('react-button'));
  }
}
