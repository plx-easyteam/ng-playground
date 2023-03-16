import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() hasBorder = false;
  @Input() isRounded = false;
  @Input() hasAltBG = false;
}
