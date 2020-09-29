import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPomodoro } from './app-pomodoro/app.pomodoro';
import { AppConfig } from './app-config/app.config';

@NgModule({
  declarations: [
    AppComponent,
    AppPomodoro,
    AppConfig
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
