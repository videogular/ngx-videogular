/*
 * Public API Surface of ngx-videogular
 */

// directives
export * from './lib/directives/vg-cue-points/vg-cue-points.directive';
export * from './lib/directives/vg-dash/vg-dash.directive';
export * from './lib/directives/vg-hls/vg-hls.directive';
export * from './lib/directives/vg-media/vg-media.directive';

// services
export * from './lib/services/vg-api/vg-api.service';
export * from './lib/services/vg-controls-hidden/vg-controls-hidden.service';
export * from './lib/services/vg-fullscreen-api/vg-fullscreen-api.service';
export * from './lib/services/vg-utils/vg-utils.service';
export * from './lib/services/vg-events/vg-events.service';
export * from './lib/services/vg-states/vg-states.service';

// interfaces
export * from './lib/interfaces/bitrate-options.interface';
export * from './lib/interfaces/i-media-element.interface';
export * from './lib/interfaces/idrm-license-server.interface';
export * from './lib/interfaces/ihls-config.interface';
export * from './lib/interfaces/vg-media-api.interface';

// enums
// export * from './lib/enums/vg-events.enum';
// export * from './lib/enums/vg-states.enum';

// modules
export * from './lib/directives/vg-media/vg-media.module';
export * from './lib/directives/vg-hls/vg-hls.module';
export * from './lib/directives/vg-dash/vg-dash.module';
export * from './lib/directives/vg-cue-points/vg-cue-points.module';
export * from './lib/directives/directives.module';
export * from './lib/ngx-videogular.module';
