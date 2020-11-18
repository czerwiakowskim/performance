import { Injectable } from '@angular/core';
import {interval, Observable} from "rxjs";
import { map, share } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  colors: Array<string> = ['green', 'orange', 'blue'];
  color$: Observable<string>;

  constructor() {
    this.color$ = interval(1000).pipe(
      map(() => this.randomColor()),
      share()
    );
  }

  public randomColor(): string {
    return this.colors[~~(this.colors.length * Math.random())];
  }
}
