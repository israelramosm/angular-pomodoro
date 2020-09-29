import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './app.config.html',
  styleUrls: ['./app.config.css']
})
export class AppConfig {
    @Output() startTime: Number = 25;
    @Output() shortBreakTime: Number = 5;
    @Output() largeBreakTime: Number = 20;
    @Output() intervalBreaks: Number = 4;
    
    constructor() {}


}