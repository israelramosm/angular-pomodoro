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
  isBreakTime = false;


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
    this.mmLeft = this.setConfig.startTime < 10 ? "0" + this.setConfig.startTime : this.setConfig.startTime;
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

  stopTimer(min) {
    console.log(min);
    console.log(this.setConfig.startTime);
    this.mmLeft = min < 10 ? "0" + min : min;
    this.ssLeft = "00";
    this.isTimerPause = true;
    clearInterval(this.timer);
  }

  timerLogic() {
    if (this.mmLeft >= 0) {
      if(this.ssLeft == "00") {
        this.ssLeft = 59;
        this.mmLeft--;
        this.mmLeft = this.mmLeft < 10 ? "0" + this.mmLeft : this.mmLeft;
      } else {
        this.ssLeft--;
        this.ssLeft = this.ssLeft < 10 ? "0" + this.ssLeft : this.ssLeft;
      }

      if(this.mmLeft == 0 && this.ssLeft == "00") {
        if(!this.isBreakTime) {
          console.log("Break Time");
          this.isBreakTime = true;
          console.log(this.intervalBreaks);
          if(this.intervalBreaks > 1){
            this.intervalBreaks--;
            this.mmLeft = this.setConfig.shortBreakTime;
            this.ssLeft = "00";
            this.stopTimer(this.mmLeft);
          } else {
            this.intervalBreaks = this.setConfig.breakInterval;
            this.ssLeft = "00";
            this.stopTimer(this.setConfig.longBreakTime);
          }
        }else {
          console.log("Working Time")
          this.isBreakTime = false;
          this.mmLeft = this.setConfig.startTime;
          this.ssLeft = "00";
          this.stopTimer(this.mmLeft);
        }
      }
    }
  }
}