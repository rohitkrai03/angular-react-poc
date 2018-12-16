import * as React from 'react';
import './Button.scss';

export interface ButtonProps {
  /**
   * Button content.
   */
  children: React.ReactChild;

  /**
   * The button type.
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Callback when button is clicked.
   */
  onClick(): Function;
}


/**
 * Button component description.
 */
export class Button extends React.Component<ButtonProps> {
  render() {
    return <button className='osio-widgets-Button' {...this.props} ></button>;
  }
}
