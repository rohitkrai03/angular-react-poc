
import { ReactWrapperComponent } from '@angular-react/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ButtonProps } from './button';

@Component({
  selector: 'app-button',
  exportAs: 'appButton',
  template: `
    <Button
      #reactNode
      [title]="title"
      [type]="type"
      [click]="onClickHandler"
      >
    </Button>
  `,
  styles: ['react-renderer'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ReactWrapperComponent<ButtonComponent> {
  @ViewChild('reactNode')
  protected reactNodeRef: ElementRef;

  @Input()
  title: ButtonProps['title'];
  @Input()
  type?: ButtonProps['type'];

  @Output() buttonClick = new EventEmitter<void>();

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2) {
    super(elementRef, changeDetectorRef, renderer);

    // coming from React context - we need to bind to this so we can access the Angular Component properties
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.buttonClick.emit();
  }
}
