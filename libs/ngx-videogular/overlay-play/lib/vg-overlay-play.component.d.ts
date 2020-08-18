import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService, VgFullscreenApiService, VgControlsHiddenService } from '@videogular/ngx-videogular/core';
export declare class VgOverlayPlayComponent implements OnInit, OnDestroy {
    API: VgApiService;
    fsAPI: VgFullscreenApiService;
    private controlsHidden;
    vgFor: string;
    elem: HTMLElement;
    target: any;
    isNativeFullscreen: boolean;
    areControlsHidden: boolean;
    subscriptions: Subscription[];
    isBuffering: boolean;
    constructor(ref: ElementRef, API: VgApiService, fsAPI: VgFullscreenApiService, controlsHidden: VgControlsHiddenService);
    ngOnInit(): void;
    onPlayerReady(): void;
    onUpdateBuffer(isBuffering: any): void;
    onChangeFullscreen(fsState: boolean): void;
    onHideControls(hidden: boolean): void;
    onClick(): void;
    getState(): string;
    ngOnDestroy(): void;
}
