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

    markAsDone(taskId) {
      this.tasks[taskId].isDone = true;
    }

    saveTask(task, taskId) {
      task.isDone = false;
      this.tasks[taskId] = task;
    }

    removeTask(taskId) {
      this.tasks.splice(taskId, 1);
    }

}