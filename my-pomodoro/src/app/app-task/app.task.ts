import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './app.task.html',
  styleUrls: ['./app.task.css']
})
export class AppTask {
    @Input() taskName: String = "Pomodoro";
    tasksSaved: Object = {};
    
    constructor() {}

    saveTask() {}

    deleteTask() {}

    markAsDone() {}

}