import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';
export interface Option {
    id: string;
    label: string;
    selected: boolean;
}
export declare class VgTrackSelectorComponent implements OnInit, OnDestroy {
    API: VgApiService;
    vgFor: string;
    elem: HTMLElement;
    target: any;
    tracks: Array<Option>;
    trackSelected: string;
    subscriptions: Subscription[];
    ariaValue: string;
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    selectTrack(trackId: string): void;
    ngOnDestroy(): void;
}
