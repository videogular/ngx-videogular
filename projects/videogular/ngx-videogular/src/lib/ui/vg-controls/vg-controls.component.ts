import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vg-controls',
  template: `
    <p>
      vg-controls works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class VgControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
