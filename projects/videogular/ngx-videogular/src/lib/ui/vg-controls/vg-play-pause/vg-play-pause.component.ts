import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vg-play-pause',
  template: `
    <p>
      vg-play-pause works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class VgPlayPauseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
