import { EventEmitter, ElementRef, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '../../services/vg-api/vg-api.service';
import { VgFullscreenApiService } from '../../services/vg-fullscreen-api/vg-fullscreen-api.service';
import { VgControlsHiddenService } from '../../services/vg-controls-hidden/vg-controls-hidden.service';
import { VgMediaDirective } from '../../directives/vg-media/vg-media.directive';
export declare class VgPlayerComponent implements AfterContentInit, OnDestroy {
    api: VgApiService;
    fsAPI: VgFullscreenApiService;
    private controlsHidden;
    elem: HTMLElement;
    isFullscreen: boolean;
    isNativeFullscreen: boolean;
    areControlsHidden: boolean;
    zIndex: string;
    onPlayerReady: EventEmitter<VgApiService>;
    onMediaReady: EventEmitter<any>;
    medias: QueryList<VgMediaDirective>;
    subscriptions: Subscription[];
    constructor(ref: ElementRef, api: VgApiService, fsAPI: VgFullscreenApiService, controlsHidden: VgControlsHiddenService);
    ngAfterContentInit(): void;
    onChangeFullscreen(fsState: boolean): void;
    onHideControls(hidden: boolean): void;
    ngOnDestroy(): void;
}
