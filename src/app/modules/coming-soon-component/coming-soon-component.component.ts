import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-coming-soon-component',
  templateUrl: './coming-soon-component.component.html',
  styleUrl: './coming-soon-component.component.scss'
})
export class ComingSoonComponentComponent implements OnInit, OnDestroy {

  moreInfo: boolean = false;
  countdown: number = 59;
  intervalId: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown < 0) {
        this.countdown = 59;
      }
    }, 1000);
  }

}
