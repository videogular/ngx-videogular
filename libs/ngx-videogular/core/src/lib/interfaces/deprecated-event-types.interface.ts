export interface MSMediaKeyNeededEvent extends Event {
  readonly initData: Uint8Array | null;
}

declare var MSMediaKeyNeededEvent: {
  prototype: MSMediaKeyNeededEvent;
  new (): MSMediaKeyNeededEvent;
};
