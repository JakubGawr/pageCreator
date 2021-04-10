import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontendDashboardModule } from '@page-creator/frontend/dashboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FrontendDashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
