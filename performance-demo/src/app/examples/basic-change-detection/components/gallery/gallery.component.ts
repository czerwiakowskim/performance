import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LogoModel} from "../../models/logo-model";
import {ColorService} from "../../services/color.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

  public logos: Array<LogoModel> = [
    { id: 1, color: 'green' },
    { id: 2, color: 'orange' }
    ];

  constructor(private colorService: ColorService) {
    // for(let i = 0; i < 1000; i++) {
    //   this.logos.push({id: i, color: colorService.randomColor()});
    // }
  }

  public check() {
    console.log('Gallery component view checked');
  }

  public changeColor() {
    const newLogo = {
      id: this.logos[0].id,
      color: this.colorService.randomColor()
    };

    this.logos[0] = newLogo;
  }

}
