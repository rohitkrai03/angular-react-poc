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
  click(): void;
}


/**
 * Button component description.
 */
export class Button extends React.Component<ButtonProps> {
  render() {
    return <button
      type={this.props.type}
      className='btn btn-primary osio-widgets-Button'
      onClick={this.props.click}
      value={this.props.title}>{this.props.title}</button>;
  }
}
