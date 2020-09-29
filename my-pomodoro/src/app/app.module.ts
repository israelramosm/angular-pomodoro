import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPomodoro } from './app-pomodoro/app.pomodoro';
import { AppConfig } from './app-config/app.config';
import { AppTask } from './app-task/app.task';
import { FormsModule } from '@angular/forms';
import { AppClock } from './app-clock/app.clock';

@NgModule({
  declarations: [
    AppComponent,
    AppPomodoro,
    AppClock,
    AppConfig,
    AppTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
