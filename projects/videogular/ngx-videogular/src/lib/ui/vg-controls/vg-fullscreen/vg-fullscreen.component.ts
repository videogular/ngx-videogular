import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vg-fullscreen',
  template: `
    <p>
      vg-fullscreen works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class VgFullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
