import { ElementRef } from '@angular/core';
import { BorderDirective } from './border.directive';

describe('BorderDirective', () => {
  it('should create an instance', () => {
    const courseItem = {} as ElementRef;
    const directive = new BorderDirective(courseItem);
    expect(directive).toBeTruthy();
  });
});
