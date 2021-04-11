import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerDirective } from './view-state.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ViewContainerDirective
  ],
  exports: [
    ViewContainerDirective
  ]
})
export class FrontendViewStateModule {}
