/**
 * @fileoverview added by tsickle
 * Generated from: lib/streaming.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgDashDirective } from './directives/vg-dash/vg-dash.directive';
import { VgHlsDirective } from './directives/vg-hls/vg-hls.directive';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
export class VgStreamingModule {
}
VgStreamingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [VgDashDirective, VgHlsDirective],
                exports: [VgDashDirective, VgHlsDirective]
            },] }
];
//# sourceMappingURL=streaming.module.js.map