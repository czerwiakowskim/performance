import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LogoModel} from "../../models/logo-model";
import {Observable, Subscription} from "rxjs";
import {ColorService} from "../../services/color.service";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent implements OnInit {

  @Input()
  logoModel: LogoModel;

  public color$: Observable<string>;

  constructor(private colorService: ColorService) { }

  public check() {
    console.log('Angular component view checked');
  }

  public getLogoUrl(): string {
    return `assets/angular-${this.logoModel.color}.svg`;
  }

  ngOnInit(): void {
    this.color$ = this.colorService.color$;
  }

}
