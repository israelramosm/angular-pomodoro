import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './app.task.html',
  styleUrls: ['./app.task.css']
})
export class AppTask {
    @Input() tasks = [];

    change;
    
    constructor() {}
}