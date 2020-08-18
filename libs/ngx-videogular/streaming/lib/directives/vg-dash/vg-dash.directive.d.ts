import { OnInit, OnChanges, OnDestroy, EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDRMLicenseServer, BitrateOptions, VgApiService } from '@videogular/ngx-videogular/core';
export declare class VgDashDirective implements OnInit, OnChanges, OnDestroy {
    private ref;
    API: VgApiService;
    vgDash: string;
    vgDRMToken: string;
    vgDRMLicenseServer: IDRMLicenseServer;
    onGetBitrates: EventEmitter<BitrateOptions[]>;
    vgFor: string;
    target: any;
    dash: any;
    subscriptions: Subscription[];
    constructor(ref: ElementRef, API: VgApiService);
    ngOnInit(): void;
    onPlayerReady(): void;
    ngOnChanges(changes: SimpleChanges): void;
    createPlayer(): void;
    setBitrate(bitrate: BitrateOptions): void;
    destroyPlayer(): void;
    ngOnDestroy(): void;
}
