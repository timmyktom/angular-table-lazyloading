import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[scrollPagination]'
})
export class ScrollPaginationDirective {

  _resetScroll: boolean;
  @Input('resetScroll')
  set resetScroll(value: boolean) {
      if (value && this._resetScroll !== value) {
          this.resetScrollPosition();
      }
      this._resetScroll = value;
  }

  @Output() scrolled = new EventEmitter()

  constructor(public el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
      try {

          const top = event.target.scrollTop
          const height = this.el.nativeElement.scrollHeight
          const offset = this.el.nativeElement.offsetHeight

          // emit bottom event
          if (top > height - offset - 1) {
              this.scrolled.emit('bottom')
          }

          // emit top event
          if (top === 0) {
              this.scrolled.emit('top')
          }

      } catch (err) { }
  }

  resetScrollPosition() {
    this.el.nativeElement.scrollTop = 0;
    //   setTimeout(() => {
    //       this.el.nativeElement.scrollIntoView({
    //           behavior: 'smooth',
    //           block: 'start'
    //       });
    //   }, 200);
  }
}
