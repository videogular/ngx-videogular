import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayable, VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgBufferingComponent implements OnInit, OnDestroy {
    API: VgApiService;
    vgFor: string;
    elem: HTMLElement;
    target: IPlayable;
    checkInterval: number;
    currentPlayPos: number;
    lastPlayPos: number;
    subscriptions: Subscription[];
    isBuffering: boolean;
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    onUpdateBuffer(isBuffering: any): void;
    ngOnDestroy(): void;
}
