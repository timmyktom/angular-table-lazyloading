import { ElementRef } from '@angular/core';
import { MouseScrollPaginationDirective } from './mouse-scroll-pagination.directive';

describe('MouseScrollPaginationDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const directive = new MouseScrollPaginationDirective(el);
    expect(directive).toBeTruthy();
  });
});
