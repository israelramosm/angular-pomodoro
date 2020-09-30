import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './app.task.html',
  styleUrls: ['./app.task.css']
})
export class AppTask {
    @Input() tasks = [];
    @Output() setConfigClock: EventEmitter<Object> = new EventEmitter();
    
    constructor() {}

    setClock(task) {
      this.setConfigClock.emit(task);
    };
}