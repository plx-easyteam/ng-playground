import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  placeholder_items = [
    {
      id: 1,
      name: "a"
    },
    {
      id: 2,
      name: "b"
    },
    {
      id: 3,
      name: "c"
    },
    {
      id: 4,
      name: "d"
    },
    {
      id: 5,
      name: "e"
    },
  ]
}
