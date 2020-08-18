import { OnInit, OnDestroy, DoCheck, EventEmitter, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
export declare class VgCuePointsDirective implements OnInit, OnDestroy, DoCheck {
    ref: ElementRef;
    onEnterCuePoint: EventEmitter<any>;
    onUpdateCuePoint: EventEmitter<any>;
    onExitCuePoint: EventEmitter<any>;
    onCompleteCuePoint: EventEmitter<any>;
    subscriptions: Subscription[];
    cuesSubscriptions: Subscription[];
    onLoad$: Observable<any>;
    onEnter$: Observable<any>;
    onExit$: Observable<any>;
    totalCues: number;
    constructor(ref: ElementRef);
    ngOnInit(): void;
    onLoad(event: any): void;
    updateCuePoints(cues: TextTrackCue[]): void;
    onEnter(event: any): void;
    onExit(event: any): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
