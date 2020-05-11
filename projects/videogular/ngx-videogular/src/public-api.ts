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

// classes
export * from './lib/directives/vg-media/vg-media-element';

// enums
// export * from './lib/enums/vg-events.enum';
// export * from './lib/enums/vg-states.enum';

// components
export * from './lib/ui/vg-player/vg-player.component';

export * from './lib/ui/vg-buffering/vg-buffering.component';

export * from './lib/ui/vg-controls/vg-controls.component';
export * from './lib/ui/vg-controls/vg-fullscreen/vg-fullscreen.component';
export * from './lib/ui/vg-controls/vg-mute/vg-mute.component';
export * from './lib/ui/vg-controls/vg-play-pause/vg-play-pause.component';
export * from './lib/ui/vg-controls/vg-playback-button/vg-playback-button.component';
export * from './lib/ui/vg-controls/vg-quality-selector/vg-quality-selector.component';
export * from './lib/ui/vg-controls/vg-time-display/vg-time-display.component';
export * from './lib/ui/vg-controls/vg-track-selector/vg-track-selector.component';
export * from './lib/ui/vg-controls/vg-volume/vg-volume.component';

export * from './lib/ui/vg-controls/vg-scrub-bar/vg-scrub-bar.component';
export * from './lib/ui/vg-controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.component';
export * from './lib/ui/vg-controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component';
export * from './lib/ui/vg-controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component';

export * from './lib/ui/vg-ima-ads/vg-ima-ads.component';

export * from './lib/ui/vg-overlay-play/vg-overlay-play.component';

// modules
export * from './lib/ui/ui.module';
export * from './lib/ui/vg-buffering/vg-buffering.module';
export * from './lib/ui/vg-controls/vg-controls.module';
export * from './lib/ui/vg-controls/vg-scrub-bar/vg-scrub-bar.module';
export * from './lib/ui/vg-ima-ads/vg-ima-ads.module';
export * from './lib/ui/vg-player/vg-player.module';
export * from './lib/ui/vg-overlay-play/vg-overlay-play.module';
export * from './lib/directives/vg-media/vg-media.module';
export * from './lib/directives/vg-hls/vg-hls.module';
export * from './lib/directives/vg-dash/vg-dash.module';
export * from './lib/directives/vg-cue-points/vg-cue-points.module';
export * from './lib/directives/directives.module';
export * from './lib/ngx-videogular.module';
