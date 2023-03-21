import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-by-three',
  templateUrl: './two-by-three.component.html',
  styleUrls: ['./two-by-three.component.scss']
})
export class TwoByThreeComponent {
  @Input() hasBorder = false;
  @Input() isRounded = false;
  @Input() hasAltBG = false;
}
