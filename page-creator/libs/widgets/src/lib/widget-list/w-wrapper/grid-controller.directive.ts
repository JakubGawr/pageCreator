import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pageCreatorGridController]',
})
export class GridControllerDirective {
  constructor(private elementRef: ElementRef) {}

  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  splitGrid(size: number) {
    this.element.style.cssText = `grid-template-columns: repeat(${size},1fr)`;
    console.log(this.element.style.cssText)
  }
}
