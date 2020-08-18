import { ElementRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgPlaybackButtonComponent implements OnInit, OnDestroy {
    API: VgApiService;
    cdr: ChangeDetectorRef;
    vgFor: string;
    elem: HTMLElement;
    target: any;
    playbackValues: Array<string>;
    playbackIndex: number;
    subscriptions: Subscription[];
    ariaValue: number;
    constructor(ref: ElementRef, API: VgApiService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    onPlayerReady(): void;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    updatePlaybackSpeed(): void;
    getPlaybackRate(): number;
    detectChanges(): void;
    ngOnDestroy(): void;
}
