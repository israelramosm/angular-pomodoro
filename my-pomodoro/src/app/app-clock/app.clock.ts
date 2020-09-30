import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './app.clock.html',
  styleUrls: ['./app.clock.css']
})
export class AppClock {
    @Input() setConfig = {};

    constructor() {}

    startTimer() {}

    stopTimer() {}

    resetTimer() {}
}