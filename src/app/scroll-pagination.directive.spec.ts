import { ElementRef } from '@angular/core';
import { ScrollPaginationDirective } from './scroll-pagination.directive';

describe('ScrollPaginationDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const directive = new ScrollPaginationDirective(el);
    expect(directive).toBeTruthy();
  });
});
