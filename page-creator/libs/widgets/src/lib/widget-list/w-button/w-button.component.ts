import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../models/widget';
import { DraggableService } from '../../services/draggable.service';

@Component({
  selector: 'page-creator-w-button',
  templateUrl: './w-button.component.html',
  styleUrls: ['./w-button.component.scss'],
  providers: [
    {
      provide: WidgetComponent,
      useExisting: WButtonComponent,
    },
  ],
})
export class WButtonComponent extends WidgetComponent implements OnInit {
  constructor(
    private draggableService: DraggableService,
    private elementRef: ElementRef
  ) {
    super();
  }
  @Input() setContent(content: string): void {
    this._html = content;
  }

  @Input() setStyles(styles): void {
    this._css = styles;
  }
  ngOnInit(): void {
    this.draggableService.moveElement(this.elementRef.nativeElement);
  }
}
