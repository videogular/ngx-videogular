import { ElementRef, OnInit, OnDestroy, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService, BitrateOptions } from '@videogular/ngx-videogular/core';
export declare class VgQualitySelectorComponent implements OnInit, OnChanges, OnDestroy {
    API: VgApiService;
    bitrates: BitrateOptions[];
    onBitrateChange: EventEmitter<BitrateOptions>;
    bitrateSelected: BitrateOptions;
    elem: HTMLElement;
    target: any;
    subscriptions: Subscription[];
    ariaValue: string;
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    selectBitrate(index: number): void;
    ngOnDestroy(): void;
}
