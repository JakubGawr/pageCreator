import { ElementRef, Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map, switchMapTo, takeUntil } from 'rxjs/operators';

export type Cords = [number, number];
@Injectable()
export class DraggableService {
  rootMouseMove$ = fromEvent(this.rootElement, 'mousemove').pipe(
    map<MouseEvent, Cords>((e: MouseEvent) => [
      Math.floor(e.pageX - this.positions.x),
      Math.floor(e.pageY - this.positions.y),
    ])
  );
  rootMouseUp$ = fromEvent(this.rootElement, 'mouseup');
  constructor(private root: ElementRef) {}

  get rootElement(): HTMLElement {
    return this.root.nativeElement as HTMLElement;
  }

  get positions(): DOMRect {
    return this.rootElement.getBoundingClientRect();
  }

  moveElement(element: HTMLElement) {
    const line = document.querySelector('.line') as HTMLElement;
    const { width, height } = element.getBoundingClientRect();
    const elementMouseDown$ = fromEvent(element, 'mousedown');
    elementMouseDown$
      .pipe(
        switchMapTo(this.rootMouseMove$.pipe(takeUntil(this.rootMouseUp$))),
        filter(([x, y]: Cords) => {
          return (
            x - width / 2 > 0 &&
            y - height / 2 > 0 &&
            x + width / 2 < this.rootElement.clientWidth &&
            y + height / 2 < this.rootElement.clientHeight
          );
        })
      )
      .subscribe((e: Cords) => {
        line.style.width = `${e[1] - 8}px`;
        this.updatePosition(this.centerItem(element, e));
      });
  }

  centerItem(element: HTMLElement, [x, y]: Cords): [HTMLElement, Cords] {
    const { width, height } = element.getBoundingClientRect();
    return [element, [x - width / 2, y - height / 2]];
  }

  updatePosition([element, [x, y]]): void {
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  }
}
