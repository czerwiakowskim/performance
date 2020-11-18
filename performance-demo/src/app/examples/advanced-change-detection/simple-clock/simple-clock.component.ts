import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss']
})
export class SimpleClockComponent implements OnDestroy {

  time = 0;
  timeSubscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef) {
    changeDetector.detach();
  }

  start() {
    this.timeSubscription = interval(10).pipe(
      take(10001), // 0, 1, ..., 1000
      map(time => time * 10)
    ).subscribe(time => {
      this.time = time

      if(time % 1000 === 0) {
        this.changeDetector.detectChanges();
      }
    });
  }

  getTime() {
    return this.time;
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  check() {
    console.log('Simple clock view checked')
  }

}
