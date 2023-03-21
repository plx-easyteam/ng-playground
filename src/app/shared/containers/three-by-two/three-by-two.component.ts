import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-by-two',
  templateUrl: './three-by-two.component.html',
  styleUrls: ['./three-by-two.component.scss']
})
export class ThreeByTwoComponent {
  @Input() hasBorder = false;
  @Input() isRounded = false;
  @Input() hasAltBG = false;
}
