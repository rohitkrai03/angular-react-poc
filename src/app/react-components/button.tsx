import * as React from 'react';

export interface IButtonProps {
  /**
   * The button type.
   */
  type?: 'button' | 'submit' | 'reset';

  title: string;

  /**
   * Callback when button is clicked.
   */
  onClick(): Function;
}


/**
 * Button component description.
 */
export class Button extends React.Component<IButtonProps> {
  render() {
    return <button type='button' className='btn btn-primary osio-widgets-Button' {...this.props} >{this.props.title}</button>;
  }
}
