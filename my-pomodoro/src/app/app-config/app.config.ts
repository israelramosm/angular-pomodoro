import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './app.config.html',
  styleUrls: ['./app.config.css']
})
export class AppConfig {
    @Output() setPomodoro: EventEmitter<Object> = new EventEmitter();
    @Output() savePomodoro: EventEmitter<Object> = new EventEmitter();

    pomodoroConfig = {
        pomodoroName: "",
        startTime: 25,
        shortBreakTime: 5,
        largeBreakTime: 20,
        breakInterval: 4
    }
       
    constructor() {}

    emitSetPomodoro() {
        let obj = this.pomodoroConfig;
        obj.pomodoroName = obj.pomodoroName === "" ? "Pomodoro" : obj.pomodoroName;
        this.setPomodoro.emit(obj);
    }

    emitSavePomodoro() {
        let obj = this.pomodoroConfig;
        obj.pomodoroName = obj.pomodoroName === "" ? "Pomodoro" : obj.pomodoroName;
        this.savePomodoro.emit(obj);
    }
}