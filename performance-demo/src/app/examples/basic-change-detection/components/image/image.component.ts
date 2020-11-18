import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

  @Input()
  public src: string;

  constructor() { }

  public check() {
    console.log('Image component view checked');
  }

}
