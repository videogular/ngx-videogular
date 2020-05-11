import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vg-mute',
  template: `
    <p>
      vg-mute works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class VgMuteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
