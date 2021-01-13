export interface FluctusInterface {
  ctx: AudioContext;
  analyser: AnalyserNode | AnalyserNode[];
  stereo: boolean;
  audible: boolean;
  wavedata: Uint8Array | null;
  freqdata: any;
  splitter: ChannelSplitterNode | null;
  merger: ChannelMergerNode | null;
  source: MediaElementAudioSourceNode | MediaStreamAudioSourceNode;
  output: ChannelMergerNode;
  waveform(output?: Uint8Array, channel?: number): Uint8Array;
  frequencies(output?: Uint8Array, channel?: number): Uint8Array;
}
