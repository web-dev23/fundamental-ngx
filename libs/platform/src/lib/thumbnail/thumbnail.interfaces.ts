import { InjectionToken } from '@angular/core';
export const THUMBNAIL_ID = new InjectionToken<string>('');
export interface Media {
    title: string;
    thumbnailUrl: string;
    mediaType: string;
    mediaUrl: string;
    captionFile?: string;
    audioDescFile?: string;
    alt: string;
    label: string;
    selected?: boolean;
    overlayRequired?: boolean;
}
