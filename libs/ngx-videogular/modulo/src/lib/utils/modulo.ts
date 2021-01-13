import {FluctusInterface} from '../interfaces/fluctus.interface';

const AudioContext = window["AudioContext"] || window["webkitAudioContext"];

export class Gondolo implements FluctusInterface {
  ctx: AudioContext;
  analyser: AnalyserNode | Array<AnalyserNode>;
  stereo: boolean;
  audible: boolean;
  wavedata: Uint8Array | null;
  freqdata: any;
  splitter: ChannelSplitterNode | null;
  merger: ChannelMergerNode | null;
  source: MediaElementAudioSourceNode | MediaStreamAudioSourceNode;
  output: ChannelMergerNode;

  constructor(
    audio:
      | HTMLAudioElement
      | AudioNode
      | MediaStream
      | MediaElementAudioSourceNode
      | MediaStreamAudioSourceNode,
    ctx?: AudioContext | any,
    opts?: { stereo?: boolean; audible?: boolean }
  ) {
    if (!(this instanceof Gondolo)) {
      return new Gondolo(audio, ctx, opts);
    }

    if (!(ctx instanceof AudioContext)) {
      (opts = ctx), (ctx = null);
    }

    opts = opts || {};
    this.ctx = ctx = ctx || new AudioContext();

    if (!(audio instanceof AudioNode)) {
      audio =
        audio instanceof Audio || audio instanceof HTMLAudioElement
          ? ctx.createMediaElementSource(audio)
          : ctx.createMediaStreamSource(audio);
    }

    this.audioConfigStateResolver(ctx, opts, audio);
    this.audioConfigStateParser(ctx);
  }

  public waveform(output?: Uint8Array, channel?: number): Uint8Array {
    if (!output) {
      output =
        this.wavedata ||
        (this.wavedata = new Uint8Array(
          (this.analyser[0] || this.analyser).frequencyBinCount
        ));
    }

    const analyser = this.stereo ? this.analyser[channel || 0] : this.analyser;

    analyser.getByteTimeDomainData(output);

    return output;
  }

  public frequencies(output?: Uint8Array, channel?: number): Uint8Array {
    if (!output) {
      output =
        this.freqdata ||
        (this.freqdata = new Uint8Array(
          (this.analyser[0] || this.analyser).frequencyBinCount
        ));
    }

    const analyser = this.stereo ? this.analyser[channel || 0] : this.analyser;

    analyser.getByteFrequencyData(output);

    return output;
  }

  private audioConfigStateResolver(
    ctx: AudioContext,
    opts: { stereo?: boolean; audible?: boolean },
    audio: MediaElementAudioSourceNode | any
  ): void {
    this.analyser = ctx.createAnalyser();
    this.stereo = !!opts.stereo;
    this.audible = opts.audible !== false;
    this.wavedata = null;
    this.freqdata = null;
    this.splitter = null;
    this.merger = null;
    this.source = audio;
  }

  private audioConfigStateParser(ctx: AudioContext) {
    if (!this.stereo) {
      this.output = this.source;

      this.source.connect(this.analyser[0] || this.analyser);

      if (this.audible) {
        (this.analyser[0] || this.analyser).connect(ctx.destination);
      }
    } else {
      this.analyser = [this.analyser[0] || this.analyser];

      this.analyser.push(ctx.createAnalyser());

      this.splitter = ctx.createChannelSplitter(2);
      this.merger = ctx.createChannelMerger(2);
      this.output = this.merger;

      this.source.connect(this.splitter);

      for (let i = 0; i < 2; i++) {
        this.splitter.connect(this.analyser[i], i, 0);
        this.analyser[i].connect(this.merger, 0, i);
      }

      if (this.audible) {
        this.merger.connect(ctx.destination);
      }
    }
  }
}
