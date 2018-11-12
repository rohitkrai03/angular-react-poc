import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './button';

export class ButtonComponent {
  static initialize(props) {
    ReactDOM.render(<Button title={props.title} onClick={() => alert('yay')}/>, document.getElementById('react-button'));
  }
}
