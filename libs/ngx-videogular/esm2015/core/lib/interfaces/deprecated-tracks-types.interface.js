/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/deprecated-tracks-types.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AudioTrack() { }
if (false) {
    /** @type {?} */
    AudioTrack.prototype.enabled;
    /** @type {?} */
    AudioTrack.prototype.id;
    /** @type {?} */
    AudioTrack.prototype.kind;
    /** @type {?} */
    AudioTrack.prototype.label;
    /** @type {?} */
    AudioTrack.prototype.language;
    /** @type {?} */
    AudioTrack.prototype.sourceBuffer;
}
/**
 * @record
 */
export function AudioTrackListEventMap() { }
if (false) {
    /** @type {?} */
    AudioTrackListEventMap.prototype.addtrack;
    /** @type {?} */
    AudioTrackListEventMap.prototype.change;
    /** @type {?} */
    AudioTrackListEventMap.prototype.removetrack;
}
/**
 * Used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate AudioTrack object in the list.
 * @record
 */
export function AudioTrackList() { }
if (false) {
    /** @type {?} */
    AudioTrackList.prototype.length;
    /** @type {?} */
    AudioTrackList.prototype.onaddtrack;
    /** @type {?} */
    AudioTrackList.prototype.onchange;
    /** @type {?} */
    AudioTrackList.prototype.onremovetrack;
    /* Skipping unhandled member: [index: number]: AudioTrack;*/
    /**
     * @param {?} id
     * @return {?}
     */
    AudioTrackList.prototype.getTrackById = function (id) { };
    /**
     * @param {?} index
     * @return {?}
     */
    AudioTrackList.prototype.item = function (index) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.removeEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    AudioTrackList.prototype.removeEventListener = function (type, listener, options) { };
}
/**
 * A single video track from a <video> element.
 * @record
 */
export function VideoTrack() { }
if (false) {
    /** @type {?} */
    VideoTrack.prototype.id;
    /** @type {?} */
    VideoTrack.prototype.kind;
    /** @type {?} */
    VideoTrack.prototype.label;
    /** @type {?} */
    VideoTrack.prototype.language;
    /** @type {?} */
    VideoTrack.prototype.selected;
    /** @type {?} */
    VideoTrack.prototype.sourceBuffer;
}
/**
 * @record
 */
export function VideoTrackListEventMap() { }
if (false) {
    /** @type {?} */
    VideoTrackListEventMap.prototype.addtrack;
    /** @type {?} */
    VideoTrackListEventMap.prototype.change;
    /** @type {?} */
    VideoTrackListEventMap.prototype.removetrack;
}
/**
 * Used to represent a list of the video tracks contained within a <video> element, with each track represented by a separate VideoTrack object in the list.
 * @record
 */
export function VideoTrackList() { }
if (false) {
    /** @type {?} */
    VideoTrackList.prototype.length;
    /** @type {?} */
    VideoTrackList.prototype.onaddtrack;
    /** @type {?} */
    VideoTrackList.prototype.onchange;
    /** @type {?} */
    VideoTrackList.prototype.onremovetrack;
    /** @type {?} */
    VideoTrackList.prototype.selectedIndex;
    /* Skipping unhandled member: [index: number]: VideoTrack;*/
    /**
     * @param {?} id
     * @return {?}
     */
    VideoTrackList.prototype.getTrackById = function (id) { };
    /**
     * @param {?} index
     * @return {?}
     */
    VideoTrackList.prototype.item = function (index) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.addEventListener = function (type, listener, options) { };
    /**
     * @template K
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.removeEventListener = function (type, listener, options) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} options
     * @return {?}
     */
    VideoTrackList.prototype.removeEventListener = function (type, listener, options) { };
}
//# sourceMappingURL=deprecated-tracks-types.interface.js.map