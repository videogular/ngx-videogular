import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vg-time-display',
  template: `
    <p>
      vg-time-display works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class VgTimeDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
