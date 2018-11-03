import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mousescrollPagination]'
})
export class MouseScrollPaginationDirective {
  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  constructor(public el: ElementRef) { }

  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
      this.mouseWheelFunc(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
      this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
      this.mouseWheelFunc(event);
  }

  mouseWheelFunc(event: any) {
      if (!event)
      event = window.event;
      var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
      if (delta > 0) {
          this.mouseWheelUp.emit(event);
      } else if (delta < 0) {
          this.mouseWheelDown.emit(event);
      }
  }
}
