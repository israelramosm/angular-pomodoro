import { Component, ViewChild } from '@angular/core';
import { AppConfig } from './app-config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pomodoro';
  @ViewChild(AppConfig) appConfig: AppConfig;
  saveConfig: Object = {};
  setConfig: Object = {};
  tasks = [];

  setPomodoroData(event) {
    console.log("set");
    this.setConfig = this.mapEventToObject(event);
  }

  savePomodoroData(event) {
    console.log("save");
    this.tasks.push(this.mapEventToObject(event));
  }

  mapEventToObject(event) {
    let pomodoroName = event.pomodoroName;
    let startTime = event.startTime;
    let shortBreakTime = event.shortBreakTime;
    let largeBreakTime = event.largeBreakTime;
    let breakInterval = event.breakInterval;
    let isDone = event.isDone;
    let obj = {
      pomodoroName, startTime, shortBreakTime, largeBreakTime, breakInterval, isDone
    };
    return obj;
  }
}
