import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WButtonComponent } from './widget-list/w-button/w-button.component';
import { WWrapperComponent } from './widget-list/w-wrapper/w-wrapper.component';
import { FrontendViewStateModule } from '@page-creator/frontend/view-state';
import { GridControllerDirective } from './widget-list/w-wrapper/grid-controller.directive';

@NgModule({
  imports: [CommonModule, FrontendViewStateModule],
  declarations: [
    WButtonComponent,
    WWrapperComponent,
    GridControllerDirective
  ],
  exports: [
    WWrapperComponent
  ]
})
export class WidgetsModule {}
