import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './app.config.html',
  styleUrls: ['./app.config.css']
})
export class AppConfig {
    @Output() 
    setPomodoro: EventEmitter<Object> = new EventEmitter<Object>();
    @Output() 
    savePomodoro: EventEmitter<Object> = new EventEmitter<Object>();
    clicked = "none";

    pomodoroConfig = {
        pomodoroName: "",
        startTime: 25,
        shortBreakTime: 5,
        largeBreakTime: 20,
        breakInterval: 4,
        isDone: false
    }
       
    constructor() {}

    emitSetPomodoro() {
        let obj = this.pomodoroConfig;
        this.clicked = "EMIT SET";
        obj.pomodoroName = obj.pomodoroName === "" ? "Pomodoro" : obj.pomodoroName;
        this.setPomodoro.emit(obj);
    }

    emitSavePomodoro() {
        let obj = this.pomodoroConfig;
        this.clicked = "EMIT SAVE";
        obj.pomodoroName = obj.pomodoroName === "" ? "Pomodoro" : obj.pomodoroName;
        this.savePomodoro.emit(obj);
        return;
    }
}