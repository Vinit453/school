import { ApplicationRef, OnDestroy } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IndividualConfig, ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
export declare class ToastNoAnimation implements OnDestroy {
    protected toastrService: ToastrService;
    toastPackage: ToastPackage;
    protected appRef: ApplicationRef;
    message?: string | SafeHtml | null;
    title?: string;
    options: IndividualConfig;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    readonly displayStyle: string;
    /** controls animation */
    state: string;
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    constructor(toastrService: ToastrService, toastPackage: ToastPackage, appRef: ApplicationRef);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
}
export declare class ToastNoAnimationModule {
}
