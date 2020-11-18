import { Component, OnInit } from '@angular/core';
import { LogoModel } from "../../models/logo-model";
import { ColorService } from "../../services/color.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  public logos: Array<LogoModel> = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];

  constructor(private colorService: ColorService) { }

  public check() {
    console.log('Gallery component view checked');
  }

  public changeColor() {
    this.logos[0].color = this.colorService.randomColor();
  }

}
