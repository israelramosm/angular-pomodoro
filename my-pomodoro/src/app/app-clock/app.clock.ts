import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './app.clock.html',
  styleUrls: ['./app.clock.css']
})
export class AppClock {
  @Input() setConfig;

  intervalBreaks;
  mmLeft;
  ssLeft;
  timer;
  isTimerPause = true;


  constructor() { }

  ngOnInit() {
    this.setConfig = {
      pomodoroName: "",
      startTime: 25,
      shortBreakTime: 5,
      longBreakTime: 20,
      breakInterval: 4,
      isDone: false
    }
    this.mmLeft = this.setConfig.startTime;
    this.ssLeft = "00";
    this.intervalBreaks = this.setConfig.breakInterval;
  }

  ngOnChanges(changes) {
    this.setConfig = changes.setConfig.currentValue;
    this.mmLeft = this.setConfig.startTime;
  }

  startPauseTimer() {
    if(this.isTimerPause) {
      this.isTimerPause = false;
      this.timer = setInterval(() => {
        this.timerLogic();
      }, 1000);
    } else {
      clearInterval(this.timer);
      this.isTimerPause = true;
    }
    
  }

  stopTimer() {
    this.mmLeft = this.setConfig.startTime;
    this.ssLeft = "00";
    this.isTimerPause = true;
    clearInterval(this.timer);
  }

  timerLogic() {
    if (this.mmLeft >= 0) {
      if(this.ssLeft == "00") {
        this.ssLeft = 59;
        this.mmLeft--;
        this.mmLeft = this.mmLeft < 10 ? "0" + this.mmLeft-- : this.mmLeft;
      } else {
        this.ssLeft--;
        this.ssLeft = this.ssLeft < 10 ? "0" + this.ssLeft-- : this.ssLeft;
      }
    } else {
      if(this.intervalBreaks > 0){
        this.intervalBreaks--;
        this.mmLeft = this.setConfig.shortBreakTime;
        this.startPauseTimer();
      }
    }
  }
}