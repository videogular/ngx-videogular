import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgVolumeComponent implements OnInit, OnDestroy {
    API: VgApiService;
    vgFor: string;
    volumeBarRef: ElementRef;
    elem: HTMLElement;
    target: any;
    isDragging: boolean;
    mouseDownPosX: number;
    ariaValue: number;
    subscriptions: Subscription[];
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    onClick(event: {
        clientX: number;
    }): void;
    onMouseDown(event: {
        clientX: number;
    }): void;
    onDrag(event: {
        clientX: number;
    }): void;
    onStopDrag(event: {
        clientX: number;
    }): void;
    arrowAdjustVolume(event: KeyboardEvent): void;
    calculateVolume(mousePosX: number): number;
    setVolume(vol: number): void;
    getVolume(): number;
    ngOnDestroy(): void;
}
