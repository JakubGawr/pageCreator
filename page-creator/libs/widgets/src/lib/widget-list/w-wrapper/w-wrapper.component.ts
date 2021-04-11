import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { WidgetComponent } from '../../models/widget';
import { BehaviorSubject, Subject } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { GridControllerDirective } from './grid-controller.directive';
import { DraggableService } from '../../services/draggable.service';

@Component({
  selector: 'page-creator-w-wrapper',
  templateUrl: './w-wrapper.component.html',
  styleUrls: ['./w-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DraggableService,
      useFactory: (elementRef) => new DraggableService(elementRef),
      deps: [ElementRef],
    },
  ],
})
export class WWrapperComponent
  extends WidgetComponent
  implements AfterViewInit {
  currentWidgets$ = new Subject();
  @ViewChildren(WidgetComponent, { read: ElementRef })
  private widgets = new QueryList<ElementRef>();

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  @Input() setContent(content: string): void {
    this._html = content;
  }

  @Input() setStyles(styles): void {
    this._css = styles;
  }

  ngAfterViewInit(): void {
    this.widgets.changes
      .pipe(mapTo(this.widgets.toArray()))
      .subscribe((result) => this.currentWidgets$.next(result));
    this.widgets.notifyOnChanges();
    this.cdr.detectChanges();
  }
}
