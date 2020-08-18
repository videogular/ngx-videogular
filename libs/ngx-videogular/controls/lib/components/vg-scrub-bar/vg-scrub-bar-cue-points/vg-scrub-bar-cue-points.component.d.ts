import { ElementRef, OnChanges, OnDestroy, OnInit, DoCheck, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgScrubBarCuePointsComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
    API: VgApiService;
    vgCuePoints: TextTrackCueList;
    vgFor: string;
    elem: HTMLElement;
    target: any;
    onLoadedMetadataCalled: boolean;
    cuePoints: Array<any>;
    subscriptions: Subscription[];
    totalCues: number;
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    onLoadedMetadata(): void;
    updateCuePoints(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
