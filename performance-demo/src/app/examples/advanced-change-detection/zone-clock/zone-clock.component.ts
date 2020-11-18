import {ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-zone-clock',
  templateUrl: './zone-clock.component.html',
  styleUrls: ['./zone-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneClockComponent implements OnDestroy {

  time = 0;
  timeSubscription: Subscription;
  @ViewChild('clock', {static: true}) clock: ElementRef<HTMLParagraphElement>;

  constructor(private zone: NgZone) {
  }

  start() {
    this.zone.runOutsideAngular(() => {
      this.timeSubscription = interval(10).pipe(
        take(10001), // 0, 1, ..., 1000
        map(time => time * 10)
      ).subscribe(time => {
        this.time = time

        if(time % 1000 === 0) {
          this.clock.nativeElement.textContent = `${time}`;
        }
      });
    });

  }

  getTime() {
    return this.time;
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  check() {
    console.log('Zone clock view checked')
  }

}
