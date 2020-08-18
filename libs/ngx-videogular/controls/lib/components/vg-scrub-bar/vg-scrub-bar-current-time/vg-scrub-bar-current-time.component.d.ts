import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgScrubBarCurrentTimeComponent implements OnInit, OnDestroy {
    API: VgApiService;
    vgFor: string;
    vgSlider: boolean;
    elem: HTMLElement;
    target: any;
    subscriptions: Subscription[];
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    getPercentage(): string;
    ngOnDestroy(): void;
}
