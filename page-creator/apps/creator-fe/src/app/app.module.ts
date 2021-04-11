import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontendDashboardModule } from '@page-creator/frontend/dashboard';
import { WidgetsModule } from '@page-creator/widgets';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FrontendDashboardModule, WidgetsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
