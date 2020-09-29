import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './app.config.html',
  styleUrls: ['./app.config.css']
})
export class AppConfig {
    startTime: Number = 25;
    shortBreakTime: Number = 5;
    largeBreakTime: Number = 20;
    breakInterval: Number = 4;
    @Output() setPomodoro = new EventEmitter();
    @Output() savePomodoro = new EventEmitter();
    
    constructor() {}
}