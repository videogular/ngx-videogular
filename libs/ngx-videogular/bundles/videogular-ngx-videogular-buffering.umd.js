(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@videogular/ngx-videogular/core')) :
  typeof define === 'function' && define.amd ? define('@videogular/ngx-videogular/buffering', ['exports', '@angular/core', '@angular/common', '@videogular/ngx-videogular/core'], factory) :
  (global = global || self, factory((global.videogular = global.videogular || {}, global.videogular['ngx-videogular'] = global.videogular['ngx-videogular'] || {}, global.videogular['ngx-videogular'].buffering = {}), global.ng.core, global.ng.common, global.videogular['ngx-videogular'].core));
}(this, (function (exports, core, common, core$1) { 'use strict';

  /**
   * @fileoverview added by tsickle
   * Generated from: lib/vg-buffering/vg-buffering.component.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  var VgBufferingComponent = /** @class */ (function () {
      /**
       * @param {?} ref
       * @param {?} API
       */
      function VgBufferingComponent(ref, API) {
          this.API = API;
          this.checkInterval = 50;
          this.currentPlayPos = 0;
          this.lastPlayPos = 0;
          this.subscriptions = [];
          this.isBuffering = false;
          this.elem = ref.nativeElement;
      }
      /**
       * @return {?}
       */
      VgBufferingComponent.prototype.ngOnInit = function () {
          var _this = this;
          if (this.API.isPlayerReady) {
              this.onPlayerReady();
          }
          else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(( /**
               * @return {?}
               */function () { return _this.onPlayerReady(); })));
          }
      };
      /**
       * @return {?}
       */
      VgBufferingComponent.prototype.onPlayerReady = function () {
          var _this = this;
          this.target = this.API.getMediaById(this.vgFor);
          this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(( /**
           * @param {?} isBuffering
           * @return {?}
           */function (isBuffering) { return _this.onUpdateBuffer(isBuffering); })));
      };
      /**
       * @param {?} isBuffering
       * @return {?}
       */
      VgBufferingComponent.prototype.onUpdateBuffer = function (isBuffering) {
          this.isBuffering = isBuffering;
      };
      /**
       * @return {?}
       */
      VgBufferingComponent.prototype.ngOnDestroy = function () {
          this.subscriptions.forEach(( /**
           * @param {?} s
           * @return {?}
           */function (s) { return s.unsubscribe(); }));
      };
      return VgBufferingComponent;
  }());
  VgBufferingComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'vg-buffering',
                  encapsulation: core.ViewEncapsulation.None,
                  template: "<div class=\"vg-buffering\">\n    <div class=\"bufferingContainer\">\n      <div class=\"loadingSpinner\"></div>\n    </div>\n  </div>",
                  styles: ["\n      vg-buffering {\n        display: none;\n        z-index: 201;\n      }\n      vg-buffering.is-buffering {\n        display: block;\n      }\n\n      .vg-buffering {\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      .vg-buffering .bufferingContainer {\n        width: 100%;\n        position: absolute;\n        cursor: pointer;\n        top: 50%;\n        margin-top: -50px;\n        zoom: 1;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n      .vg-buffering .loadingSpinner {\n        background-color: rgba(0, 0, 0, 0);\n        border: 5px solid rgba(255, 255, 255, 1);\n        opacity: 0.9;\n        border-top: 5px solid rgba(0, 0, 0, 0);\n        border-left: 5px solid rgba(0, 0, 0, 0);\n        border-radius: 50px;\n        box-shadow: 0 0 35px #ffffff;\n        width: 50px;\n        height: 50px;\n        margin: 0 auto;\n        -moz-animation: spin 0.5s infinite linear;\n        -webkit-animation: spin 0.5s infinite linear;\n      }\n      .vg-buffering .loadingSpinner .stop {\n        -webkit-animation-play-state: paused;\n        -moz-animation-play-state: paused;\n      }\n      @-moz-keyframes spin {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-moz-keyframes spinoff {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(-360deg);\n        }\n      }\n      @-webkit-keyframes spin {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @-webkit-keyframes spinoff {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(-360deg);\n        }\n      }\n    "]
              }] }
  ];
  /** @nocollapse */
  VgBufferingComponent.ctorParameters = function () { return [
      { type: core.ElementRef },
      { type: core$1.VgApiService }
  ]; };
  VgBufferingComponent.propDecorators = {
      vgFor: [{ type: core.Input }],
      isBuffering: [{ type: core.HostBinding, args: ['class.is-buffering',] }]
  };
  if (false) {
      /** @type {?} */
      VgBufferingComponent.prototype.vgFor;
      /** @type {?} */
      VgBufferingComponent.prototype.elem;
      /** @type {?} */
      VgBufferingComponent.prototype.target;
      /** @type {?} */
      VgBufferingComponent.prototype.checkInterval;
      /** @type {?} */
      VgBufferingComponent.prototype.currentPlayPos;
      /** @type {?} */
      VgBufferingComponent.prototype.lastPlayPos;
      /** @type {?} */
      VgBufferingComponent.prototype.subscriptions;
      /** @type {?} */
      VgBufferingComponent.prototype.isBuffering;
      /** @type {?} */
      VgBufferingComponent.prototype.API;
  }

  /**
   * @fileoverview added by tsickle
   * Generated from: lib/buffering.module.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  var VgBufferingModule = /** @class */ (function () {
      function VgBufferingModule() {
      }
      return VgBufferingModule;
  }());
  VgBufferingModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, core$1.VgCoreModule],
                  declarations: [VgBufferingComponent],
                  exports: [VgBufferingComponent],
              },] }
  ];

  /**
   * @fileoverview added by tsickle
   * Generated from: index.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  /**
   * @fileoverview added by tsickle
   * Generated from: videogular-ngx-videogular-buffering.ts
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */

  exports.VgBufferingComponent = VgBufferingComponent;
  exports.VgBufferingModule = VgBufferingModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=videogular-ngx-videogular-buffering.umd.js.map
