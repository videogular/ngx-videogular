import { ElementRef, OnInit, OnDestroy, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgUtcPipe implements PipeTransform {
    transform(value: number, format: string): string;
}
export declare class VgTimeDisplayComponent implements OnInit, OnDestroy {
    API: VgApiService;
    vgFor: string;
    vgProperty: string;
    vgFormat: string;
    elem: HTMLElement;
    target: any;
    subscriptions: Subscription[];
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    getTime(): number;
    ngOnDestroy(): void;
}
