import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService, VgFullscreenApiService } from '@videogular/ngx-videogular/core';
export declare class VgFullscreenComponent implements OnInit, OnDestroy {
    API: VgApiService;
    fsAPI: VgFullscreenApiService;
    elem: HTMLElement;
    vgFor: string;
    target: Object;
    isFullscreen: boolean;
    subscriptions: Subscription[];
    ariaValue: string;
    constructor(ref: ElementRef, API: VgApiService, fsAPI: VgFullscreenApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    onChangeFullscreen(fsState: boolean): void;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    changeFullscreenState(): void;
    ngOnDestroy(): void;
}
