import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ComponentType } from '../portal/portal';
import { ToastRef } from './toast-injector';
/**
 * Configuration for an individual toast.
 */
export interface IndividualConfig {
    /**
     * disable both timeOut and extendedTimeOut
     * default: false
     */
    disableTimeOut: boolean;
    /**
    * toast time to live in milliseconds
    * default: 5000
    */
    timeOut: number;
    /**
    * toast show close button
    * default: false
    */
    closeButton: boolean;
    /**
    * time to close after a user hovers over toast
    * default: 1000
     */
    extendedTimeOut: number;
    /**
     * show toast progress bar
     * default: false
     */
    progressBar: boolean;
    /**
     * changes toast progress bar animation
     * default: decreasing
     */
    progressAnimation?: 'increasing' | 'decreasing';
    /**
     * render html in toast message (possibly unsafe)
     * default: false
     */
    enableHtml: boolean;
    /**
     * css class on toast component
     * default: toast
     */
    toastClass: string;
    /**
     * css class on toast container
     * default: toast-top-right
     */
    positionClass: string;
    /**
     * css class on to toast title
     * default: toast-title
     */
    titleClass: string;
    /**
     * css class on to toast title
     * default: toast-title
     */
    messageClass: string;
    /**
     * animation easing on toast
     * default: ease-in
     */
    easing: string;
    /**
     * animation ease time on toast
     * default: 300
     */
    easeTime: string | number;
    /**
     * clicking on toast dismisses it
     * default: true
     */
    tapToDismiss: boolean;
    /**
     * Angular toast component to be shown
     * default: Toast
     */
    toastComponent: ComponentType<any>;
    /**
     * Helps show toast from a websocket or from event outside Angular
     * default: false
     */
    onActivateTick: boolean;
}
export interface ToastrIconClasses {
    error: string;
    info: string;
    success: string;
    warning: string;
}
/**
 * Global Toast configuration
 * Includes all IndividualConfig
 */
export interface GlobalConfig extends IndividualConfig {
    /**
     * max toasts opened. Toasts will be queued
     * Zero is unlimited
     * default: 0
     */
    maxOpened: number;
    /**
     * dismiss current toast when max is reached
     * default: false
     */
    autoDismiss: boolean;
    iconClasses: Partial<ToastrIconClasses>;
    /**
     * New toast placement
     * default: true
     */
    newestOnTop: boolean;
    /**
     * block duplicate messages
     * default: false
     */
    preventDuplicates: boolean;
}
/**
 * Everything a toast needs to launch
 */
export declare class ToastPackage {
    toastId: number;
    config: IndividualConfig;
    message: string | SafeHtml | null | undefined;
    title: string | undefined;
    toastType: string;
    toastRef: ToastRef<any>;
    private _onTap;
    private _onAction;
    constructor(toastId: number, config: IndividualConfig, message: string | SafeHtml | null | undefined, title: string | undefined, toastType: string, toastRef: ToastRef<any>);
    /** Fired on click */
    triggerTap(): void;
    onTap(): Observable<any>;
    /** available for use in custom toast */
    triggerAction(action?: any): void;
    onAction(): Observable<any>;
}
export interface GlobalToastrConfig extends GlobalConfig {
}
export interface IndividualToastrConfig extends IndividualConfig {
}
export interface ToastrConfig extends IndividualConfig {
}