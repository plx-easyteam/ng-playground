import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-four-by-one',
  templateUrl: './four-by-one.component.html',
  styleUrls: ['./four-by-one.component.scss']
})
export class FourByOneComponent {
  @Input() hasBorder = false;
  @Input() isRounded = false;
  @Input() hasAltBG = false;
}
