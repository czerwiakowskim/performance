import { Component, Input, OnInit } from '@angular/core';
import { LogoModel } from "../../models/logo-model";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  @Input()
  logoModel: LogoModel;

  constructor() { }

  public check() {
    console.log('Angular component view checked');
  }

  public getLogoUrl(): string {
    return `assets/angular-${this.logoModel.color}.svg`;
  }

}
