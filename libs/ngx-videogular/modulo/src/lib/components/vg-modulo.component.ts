import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { ModuloConfig } from '../interfaces/modulo-config.interface';
import { Gondolo } from "../utils/modulo";

@Component({
  selector: "vg-modulo",
  templateUrl: "./vg-modulo.component.html",
})
export class VgModuloComponent {
  private _audioAnalyser: Gondolo;
  private _ctx: CanvasRenderingContext2D;

  @Input() moduloConfig: ModuloConfig;
  @Input() audioElement: ElementRef<HTMLAudioElement>;

  @ViewChild("waveCanvas", { static: false }) waveCanvas: ElementRef<HTMLCanvasElement>;

  public startVisualizer() {
    if (!this._audioAnalyser) {
      this._audioAnalyser = new Gondolo(this.audioElement.nativeElement);

      const {width, height} = this.moduloConfig.dimensions;
      const canvasElement = this.waveCanvas.nativeElement;

      this._ctx = canvasElement.getContext("2d");

      canvasElement.width = width;
      canvasElement.height = height;
    }

    this.update();
  }

  public update() {
    const audioFreq = this._audioAnalyser.waveform();
    const {fillStyle, strokeStyle, lineWidth, scaleFactor} = this.moduloConfig;
    const {width, height} = this.waveCanvas.nativeElement;

    // Clear canvas
    this._ctx.fillStyle = fillStyle;
    this._ctx.fillRect(0, 0, width, height);

    this._ctx.strokeStyle = strokeStyle;
    this._ctx.lineWidth = lineWidth;

    // Draw frequency lines
    this._ctx.beginPath();
    this._ctx.moveTo(0, height / 2 - audioFreq[0] * scaleFactor);

    for (let i = 0; i < audioFreq.length; i++) {
      this._ctx.lineTo(
        (width / audioFreq.length) * i,
        height / 2 - audioFreq[i] * scaleFactor
      );
    }

    this._ctx.moveTo(0, height / 2 + audioFreq[0] * scaleFactor);

    for (let i = 0; i < audioFreq.length; i++) {
      this._ctx.lineTo(
        (width / audioFreq.length) * i,
        height / 2 + audioFreq[i] * scaleFactor
      );
    }

    this._ctx.stroke();

    window.requestAnimationFrame(() => this.update());
  }
}
