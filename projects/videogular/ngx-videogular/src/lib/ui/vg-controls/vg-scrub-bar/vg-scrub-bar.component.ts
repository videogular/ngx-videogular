import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vg-scrub-bar',
  template: `
    <p>
      vg-scrub-bar works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class VgScrubBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
