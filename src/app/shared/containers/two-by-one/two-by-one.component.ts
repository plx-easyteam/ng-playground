import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-by-one',
  templateUrl: './two-by-one.component.html',
  styleUrls: ['./two-by-one.component.scss']
})
export class TwoByOneComponent {
  @Input() hasBorder = false;
  @Input() isRounded = false;
  @Input() hasAltBG = false;
}
