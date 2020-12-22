# Getting started/Basic Setup

## Installing

```shell
npm i --save @videogular/ngx-videogular
```

**Note:** I cannot stress this enough but **please** check that you're installing `ngx-videogular` with the `@videogular` scope. There's an unscoped package published but it has nothing to do with the Videogular org. This repo (the one you're reading this from) is the **official** one.

## Importing the Stylesheet

### **Old way**

```json
{
   ...
   "apps": [
       {
           ...
           "styles": [
               "../node_modules/videogular2/fonts/videogular.css",
               "styles.scss"
           ],
           ...
       }
   ],
   ...
}
```

### **New way**

```json
{
   ...
   "apps": [
       {
           ...
           "styles": [
               "node_modules/@videogular/ngx-videogular/fonts/videogular.css",
               "styles.scss"
           ],
           ...
       }
   ],
   ...
}
```

# Breaking Changes

## **[DISCLAIMER]**

All features and the overall code are **the same** as `videogular2` (well, we made some performance improvements but that doesn't change how it behaves).<br>
So if you used and trusted it before, you can expect **the same thing**.

## **Import Paths**

#### **Old way (module imports)**

```typescript
import {SOME_VIDEOGULAR_MODULE} from 'videogular2/SOME_VIDEOGULAR_MODULE';
```

#### **New way (module imports)**

```typescript
import {SOME_VIDEOGULAR_MODULE} from '@videogular/ngx-videogular/SOME_VIDEOGULAR_MODULE';
```

#### **Old way (API imports)**

```typescript
import {SOME_VIDEOGULAR_CLASS} from 'videogular2/compiled/SOME_VIDEOGULAR_MODULE';
```

#### **New way (API imports)**

```typescript
import {SOME_VIDEOGULAR_CLASS} from '@videogular/ngx-videogular/SOME_VIDEOGULAR_MODULE';
```

For more module-specific API imports, please check out [Modules](https://github.com/videogular/ngx-videogular/tree/master/docs/ngx-videogular-demo/modules).

## **Naming Changes**

| Module        | Old Name                | New Name                         |
|---------------|-------------------------|----------------------------------|
| /core         | VgPlayer                | VgPlayerComponent                |
|               | VgMedia                 | VgMediaDirective                 |
|               | VgAPI                   | VgApiService                     |
|               | VgFullscreenAPI         | VgFullscreenApiService           |
|               | VgUtils                 | VgUtilsService                   |
|               | VgControlsHidden        | VgControlsHiddenService          |
|               | VgCuePoints             | VgCuePointsDirective             |
|               | VgEvents                | VgEvents                         |
|               | VgStates                | VgStates                         |
|               | BitrateOption           | BitrateOption                    |
|---------------|-------------------------|----------------------------------|
| /buffering    | VgBuffering             | VgBufferingComponent             |
|---------------|-------------------------|----------------------------------|
| /controls     | VgControls              | VgControlsComponent              |
|               | VgPlayPause             | VgPlayPauseComponent             |
|               | VgPlaybackButton        | VgPlaybackButtonComponent        |
|               | VgScrubBar              | VgScrubBarComponent              |
|               | VgScrubBarCurrentTime   | VgScrubBarCurrentTimeComponent   |
|               | VgScrubBarBufferingTime | VgScrubBarBufferingTimeComponent |
|               | VgScrubBarCuePoints     | VgScrubBarCuePointsComponent     |
|               | VgTimeDisplay           | VgTimeDisplayComponent           |
|               | VgUtcPipe               | VgUtcPipe                        |
|               | VgTrackSelector         | VgTrackSelectorComponent         |
|               | VgQualitySelector       | VgQualitySelectorComponent       |
|               | VgMute                  | VgMuteComponent                  |
|               | VgVolume                | VgVolumeComponent                |
|               | VgFullscreen            | VgFullscreenComponent            |
|---------------|-------------------------|----------------------------------|
| /ima-ads      | VgImaAds                | VgImaAdsComponent                |
|---------------|-------------------------|----------------------------------|
| /overlay-play | VgOverlayPlay           | VgOverlayPlayComponent           |
|---------------|-------------------------|----------------------------------|
| /streaming    | VgDASH                  | VgDashDirective                  |
|               | VgHLS                   | VgHlsDirective                   |
