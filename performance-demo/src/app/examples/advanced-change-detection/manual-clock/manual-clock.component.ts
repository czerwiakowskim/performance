import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-manual-clock',
  templateUrl: './manual-clock.component.html',
  styleUrls: ['./manual-clock.component.scss']
})
export class ManualClockComponent implements OnDestroy {

  time = 0;
  timeSubscription: Subscription;
  @ViewChild('clock', {static: true}) clock: ElementRef<HTMLParagraphElement>;

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
        this.clock.nativeElement.textContent = `${time}`;
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
    console.log('Manual clock view checked')
  }

}
