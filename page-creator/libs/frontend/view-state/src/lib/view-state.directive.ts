import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[viewContainer]' })
export class ViewContainerDirective<T> {
  private _mainTemplateRef: TemplateRef<unknown> = null;
  private _errorTemplateRef: TemplateRef<unknown> = null;
  private _loaderTemplateRef: TemplateRef<unknown> = null;

  constructor(private _viewContainer: ViewContainerRef) {}

  @Input() set viewContainer(view: []) {
    if (!view) return;

    this._viewContainer.clear();
    if (view.length === 0) {
      this._viewContainer.createEmbeddedView(this._loaderTemplateRef);
    }
  }

  @Input() set viewContainerMain(templateRef: TemplateRef<unknown>) {
    this._mainTemplateRef = templateRef;
  }

  @Input() set viewContainerError(templateRef: TemplateRef<unknown>) {
    this._errorTemplateRef = templateRef;
  }

  @Input() set viewContainerLoading(templateRef: TemplateRef<unknown>) {
    this._loaderTemplateRef = templateRef;
  }
}
