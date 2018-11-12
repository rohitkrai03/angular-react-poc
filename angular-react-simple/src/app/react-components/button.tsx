import * as React from 'react';

export interface ButtonProps {
  /**
   * The button type.
   */
  type?: 'button' | 'submit' | 'reset';

  title: string;

  /**
   * Callback when button is clicked.
   */
  onClick(): void;
}


/**
 * Button component description.
 */
export class Button extends React.Component<ButtonProps> {
  render() {
    return <button type='button' className='osio-widgets-Button' {...this.props} >{this.props.title}</button>;
  }
}
