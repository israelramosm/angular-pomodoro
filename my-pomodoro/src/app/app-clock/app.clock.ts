import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './app.clock.html',
  styleUrls: ['./app.clock.css']
})
export class AppClock {
  @Input() setConfig;
  @ViewChild('messageModal') myModal:ElementRef;

  intervalBreaks;
  mmLeft;
  ssLeft;
  timer;
  modalMessage;
  modalTitle ;
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
    this.modalTitle = "Creativity Time";
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
          this.modalTitle = "Break Time";
          this.modalMessage = "Is time for your break, relax a little bit";
          this.myModal.nativeElement.click();
          this.isBreakTime = true;
          if(this.intervalBreaks > 1){
            this.intervalBreaks--;
            this.mmLeft = this.setConfig.shortBreakTime;
            this.ssLeft = "00";
            this.stopTimer(this.mmLeft);
          } else {
            this.modalTitle = "Break Time";
            this.modalMessage = "Is time for your long break, go grab some snack";
            this.myModal.nativeElement.click();
            this.intervalBreaks = this.setConfig.breakInterval;
            this.ssLeft = "00";
            this.stopTimer(this.setConfig.longBreakTime);
          }
        }else {
          this.modalTitle = "Creativity Time";
          this.modalMessage = "Your break is done, Let's create amazing stuff";
          this.myModal.nativeElement.click();
          this.isBreakTime = false;
          this.mmLeft = this.setConfig.startTime;
          this.ssLeft = "00";
          this.stopTimer(this.mmLeft);
        }
      }
    }
  }
}