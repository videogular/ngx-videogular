/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/i-media-element.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IMediaElement() { }
if (false) {
    /**
     * Returns the id of the element.
     * @type {?}
     */
    IMediaElement.prototype.id;
    /**
     * Returns the node name. Only available on native HTML tags.
     * @type {?|undefined}
     */
    IMediaElement.prototype.nodeName;
    /**
     * Returns the node element. Only available on Angular classes.
     * @type {?|undefined}
     */
    IMediaElement.prototype.elem;
    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     * @type {?}
     */
    IMediaElement.prototype.audioTracks;
    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     * @type {?}
     */
    IMediaElement.prototype.autoplay;
    /**
     * Gets a collection of buffered time ranges.
     * @type {?}
     */
    IMediaElement.prototype.buffered;
    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for
     * the media (in case the developer does not include controls for the player).
     * @type {?}
     */
    IMediaElement.prototype.controls;
    /** @type {?} */
    IMediaElement.prototype.crossOrigin;
    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     * @type {?}
     */
    IMediaElement.prototype.currentSrc;
    /**
     * Gets or sets the current playback position, in seconds.
     * @type {?}
     */
    IMediaElement.prototype.currentTime;
    /** @type {?} */
    IMediaElement.prototype.defaultMuted;
    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     * @type {?}
     */
    IMediaElement.prototype.defaultPlaybackRate;
    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration
     * is not available, or Infinity if the media resource is streaming.
     * @type {?}
     */
    IMediaElement.prototype.duration;
    /**
     * Gets information about whether the playback has ended or not.
     * @type {?}
     */
    IMediaElement.prototype.ended;
    /**
     * Returns an object representing the current error state of the audio or video element.
     * @type {?}
     */
    IMediaElement.prototype.error;
    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     * @type {?}
     */
    IMediaElement.prototype.loop;
    /** @type {?} */
    IMediaElement.prototype.mediaKeys;
    /**
     * Specifies the purpose of the audio or video media, such as background audio or alerts.
     * @type {?}
     */
    IMediaElement.prototype.msAudioCategory;
    /**
     * Specifies the output device id that the audio will be sent to.
     * @type {?}
     */
    IMediaElement.prototype.msAudioDeviceType;
    /** @type {?} */
    IMediaElement.prototype.msGraphicsTrustStatus;
    /**
     * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
     * @type {?}
     */
    IMediaElement.prototype.msKeys;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToDisabled;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to
     * stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToPreferredSourceUri;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToPrimary;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     * @type {?}
     */
    IMediaElement.prototype.msPlayToSource;
    /**
     * Specifies whether or not to enable low-latency playback on the media element.
     * @type {?}
     */
    IMediaElement.prototype.msRealTime;
    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     * @type {?}
     */
    IMediaElement.prototype.muted;
    /**
     * Gets the current network activity for the element.
     * @type {?}
     */
    IMediaElement.prototype.networkState;
    /** @type {?} */
    IMediaElement.prototype.onencrypted;
    /** @type {?} */
    IMediaElement.prototype.onmsneedkey;
    /**
     * Gets a flag that specifies whether playback is paused.
     * @type {?}
     */
    IMediaElement.prototype.paused;
    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is
     * expressed as a multiple of the normal speed of the media resource.
     * @type {?}
     */
    IMediaElement.prototype.playbackRate;
    /**
     * Gets TimeRanges for the current media resource that has been played.
     * @type {?}
     */
    IMediaElement.prototype.played;
    /**
     * Gets or sets the current playback position, in seconds.
     * @type {?}
     */
    IMediaElement.prototype.preload;
    /** @type {?} */
    IMediaElement.prototype.readyState;
    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     * @type {?}
     */
    IMediaElement.prototype.seekable;
    /**
     * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
     * @type {?}
     */
    IMediaElement.prototype.seeking;
    /**
     * The address or URL of the a media resource that is to be considered.
     * @type {?}
     */
    IMediaElement.prototype.src;
    /** @type {?} */
    IMediaElement.prototype.srcObject;
    /** @type {?} */
    IMediaElement.prototype.textTracks;
    /** @type {?} */
    IMediaElement.prototype.videoTracks;
    /**
     * Gets or sets the volume level for audio portions of the media element.
     * @type {?}
     */
    IMediaElement.prototype.volume;
    /** @type {?} */
    IMediaElement.prototype.HAVE_CURRENT_DATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_ENOUGH_DATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_FUTURE_DATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_METADATA;
    /** @type {?} */
    IMediaElement.prototype.HAVE_NOTHING;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_EMPTY;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_IDLE;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_LOADING;
    /** @type {?} */
    IMediaElement.prototype.NETWORK_NO_SOURCE;
    /**
     * @param {?} kind
     * @param {?=} label
     * @param {?=} language
     * @return {?}
     */
    IMediaElement.prototype.addTextTrack = function (kind, label, language) { };
    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     * @param {?} type
     * @return {?}
     */
    IMediaElement.prototype.canPlayType = function (type) { };
    /**
     * Resets the audio or video object and loads a new media resource.
     * @return {?}
     */
    IMediaElement.prototype.load = function () { };
    /**
     * Clears all effects from the media pipeline.
     * @return {?}
     */
    IMediaElement.prototype.msClearEffects = function () { };
    /**
     * @return {?}
     */
    IMediaElement.prototype.msGetAsCastingSource = function () { };
    /**
     * Inserts the specified audio effect into media pipeline.
     * @param {?} activatableClassId
     * @param {?} effectRequired
     * @param {?=} config
     * @return {?}
     */
    IMediaElement.prototype.msInsertAudioEffect = function (activatableClassId, effectRequired, config) { };
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    IMediaElement.prototype.msSetMediaKeys = function (mediaKeys) { };
    /**
     * Specifies the media protection manager for a given media pipeline.
     * @param {?=} mediaProtectionManager
     * @return {?}
     */
    IMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) { };
    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is
     * playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     * @return {?}
     */
    IMediaElement.prototype.pause = function () { };
    /**
     * Loads and starts playback of a media resource.
     * @return {?}
     */
    IMediaElement.prototype.play = function () { };
    /**
     * @param {?} mediaKeys
     * @return {?}
     */
    IMediaElement.prototype.setMediaKeys = function (mediaKeys) { };
    /**
     * @param {?} type
     * @param {?} listener
     * @param {?=} useCapture
     * @return {?}
     */
    IMediaElement.prototype.addEventListener = function (type, listener, useCapture) { };
}
//# sourceMappingURL=i-media-element.interface.js.map