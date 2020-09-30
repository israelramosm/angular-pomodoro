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
    this.setConfig = event;
  }

  savePomodoroData(event) {
    console.log("save");
    this.saveConfig = event;
    this.saveConfig["isDone"] = false;
    this.tasks.push(this.saveConfig);
  }
}
