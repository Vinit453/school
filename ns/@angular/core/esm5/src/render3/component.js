/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertComponentType, assertNotNull } from './assert';
import { queueInitHooks, queueLifecycleHooks } from './hooks';
import { CLEAN_PROMISE, ROOT_DIRECTIVE_INDICES, _getComponentHostLElementNode, baseDirectiveCreate, createLView, createTView, detectChangesInternal, enterView, executeInitAndContentHooks, getRootView, hostElement, initChangeDetectorIfExisting, leaveView, locateHostElement, setHostBindings } from './instructions';
import { domRendererFactory3 } from './interfaces/renderer';
import { stringify } from './util';
import { createViewRef } from './view_ref';
/**
 * Bootstraps a component, then creates and returns a `ComponentRef` for that component.
 *
 * @param componentType Component to bootstrap
 * @param options Optional parameters which control bootstrapping
 */
export function createComponentRef(componentType, opts) {
    var component = renderComponent(componentType, opts);
    var hostView = _getComponentHostLElementNode(component).data;
    var hostViewRef = createViewRef(hostView, component);
    return {
        location: { nativeElement: getHostElement(component) },
        injector: opts.injector || NULL_INJECTOR,
        instance: component,
        hostView: hostViewRef,
        changeDetectorRef: hostViewRef,
        componentType: componentType,
        // TODO: implement destroy and onDestroy
        destroy: function () { },
        onDestroy: function (cb) { }
    };
}
// TODO: A hack to not pull in the NullInjector from @angular/core.
export var NULL_INJECTOR = {
    get: function (token, notFoundValue) {
        throw new Error('NullInjector: Not found: ' + stringify(token));
    }
};
/**
 * Bootstraps a Component into an existing host element and returns an instance
 * of the component.
 *
 * Use this function to bootstrap a component into the DOM tree. Each invocation
 * of this function will create a separate tree of components, injectors and
 * change detection cycles and lifetimes. To dynamically insert a new component
 * into an existing tree such that it shares the same injection, change detection
 * and object lifetime, use {@link ViewContainer#createComponent}.
 *
 * @param componentType Component to bootstrap
 * @param options Optional parameters which control bootstrapping
 */
export function renderComponent(componentType /* Type as workaround for: Microsoft/TypeScript/issues/4881 */, opts) {
    if (opts === void 0) { opts = {}; }
    ngDevMode && assertComponentType(componentType);
    var rendererFactory = opts.rendererFactory || domRendererFactory3;
    var componentDef = componentType.ngComponentDef;
    if (componentDef.type != componentType)
        componentDef.type = componentType;
    var component;
    // The first index of the first selector is the tag name.
    var componentTag = componentDef.selectors[0][0];
    var hostNode = locateHostElement(rendererFactory, opts.host || componentTag);
    var rootContext = {
        // Incomplete initialization due to circular reference.
        component: (null),
        scheduler: opts.scheduler || requestAnimationFrame.bind(window),
        clean: CLEAN_PROMISE,
    };
    var rootView = createLView(-1, rendererFactory.createRenderer(hostNode, componentDef.rendererType), createTView(null, null), null, rootContext, componentDef.onPush ? 4 /* Dirty */ : 2 /* CheckAlways */);
    rootView.injector = opts.injector || null;
    var oldView = enterView(rootView, (null));
    var elementNode;
    try {
        if (rendererFactory.begin)
            rendererFactory.begin();
        // Create element node at index 0 in data array
        elementNode = hostElement(componentTag, hostNode, componentDef);
        // Create directive instance with factory() and store at index 0 in directives array
        component = rootContext.component = baseDirectiveCreate(0, componentDef.factory(), componentDef);
        initChangeDetectorIfExisting(elementNode.nodeInjector, component, (elementNode.data));
        opts.hostFeatures && opts.hostFeatures.forEach(function (feature) { return feature(component, componentDef); });
        executeInitAndContentHooks();
        setHostBindings(ROOT_DIRECTIVE_INDICES);
        detectChangesInternal(elementNode.data, elementNode, componentDef, component);
    }
    finally {
        leaveView(oldView);
        if (rendererFactory.end)
            rendererFactory.end();
    }
    return component;
}
/**
 * Used to enable lifecycle hooks on the root component.
 *
 * Include this feature when calling `renderComponent` if the root component
 * you are rendering has lifecycle hooks defined. Otherwise, the hooks won't
 * be called properly.
 *
 * Example:
 *
 * ```
 * renderComponent(AppComponent, {features: [RootLifecycleHooks]});
 * ```
 */
export function LifecycleHooksFeature(component, def) {
    var elementNode = _getComponentHostLElementNode(component);
    // Root component is always created at dir index 0
    queueInitHooks(0, def.onInit, def.doCheck, elementNode.view.tView);
    queueLifecycleHooks(elementNode.tNode.flags, elementNode.view);
}
/**
 * Retrieve the root context for any component by walking the parent `LView` until
 * reaching the root `LView`.
 *
 * @param component any component
 */
function getRootContext(component) {
    var rootContext = getRootView(component).context;
    ngDevMode && assertNotNull(rootContext, 'rootContext');
    return rootContext;
}
/**
 * Retrieve the host element of the component.
 *
 * Use this function to retrieve the host element of the component. The host
 * element is the element which the component is associated with.
 *
 * @param component Component for which the host element should be retrieved.
 */
export function getHostElement(component) {
    return _getComponentHostLElementNode(component).native;
}
/**
 * Retrieves the rendered text for a given component.
 *
 * This function retrieves the host element of a component and
 * and then returns the `textContent` for that element. This implies
 * that the text returned will include re-projected content of
 * the component as well.
 *
 * @param component The component to return the content text for.
 */
export function getRenderedText(component) {
    var hostElement = getHostElement(component);
    return hostElement.textContent || '';
}
/**
 * Wait on component until it is rendered.
 *
 * This function returns a `Promise` which is resolved when the component's
 * change detection is executed. This is determined by finding the scheduler
 * associated with the `component`'s render tree and waiting until the scheduler
 * flushes. If nothing is scheduled, the function returns a resolved promise.
 *
 * Example:
 * ```
 * await whenRendered(myComponent);
 * ```
 *
 * @param component Component to wait upon
 * @returns Promise which resolves when the component is rendered.
 */
export function whenRendered(component) {
    return getRootContext(component).clean;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxhQUFhLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFFLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3hULE9BQU8sRUFBNkIsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7QUFzRHpDLE1BQU0sNkJBQ0YsYUFBK0IsRUFBRSxJQUE0QjtJQUMvRCxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELElBQU0sUUFBUSxHQUFHLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWEsQ0FBQztJQUN4RSxJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQztRQUNMLFFBQVEsRUFBRSxFQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFDcEQsUUFBUSxFQUFFLElBQUksQ0FB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Ozs7Ozs7Ozs7Ozs7O0FBa0JELE1BQU0sdUJBQXVCLFNBQWM7SUFDekMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDeEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFdlIGFyZSB0ZW1wb3JhcmlseSBpbXBvcnRpbmcgdGhlIGV4aXN0aW5nIHZpZXdFbmdpbmUgZnJvbSBjb3JlIHNvIHdlIGNhbiBiZSBzdXJlIHdlIGFyZVxuLy8gY29ycmVjdGx5IGltcGxlbWVudGluZyBpdHMgaW50ZXJmYWNlcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtDb21wb25lbnRSZWYgYXMgdmlld0VuZ2luZV9Db21wb25lbnRSZWZ9IGZyb20gJy4uL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5cbmltcG9ydCB7YXNzZXJ0Q29tcG9uZW50VHlwZSwgYXNzZXJ0Tm90TnVsbH0gZnJvbSAnLi9hc3NlcnQnO1xuaW1wb3J0IHtxdWV1ZUluaXRIb29rcywgcXVldWVMaWZlY3ljbGVIb29rc30gZnJvbSAnLi9ob29rcyc7XG5pbXBvcnQge0NMRUFOX1BST01JU0UsIFJPT1RfRElSRUNUSVZFX0lORElDRVMsIF9nZXRDb21wb25lbnRIb3N0TEVsZW1lbnROb2RlLCBiYXNlRGlyZWN0aXZlQ3JlYXRlLCBjcmVhdGVMVmlldywgY3JlYXRlVFZpZXcsIGRldGVjdENoYW5nZXNJbnRlcm5hbCwgZW50ZXJWaWV3LCBleGVjdXRlSW5pdEFuZENvbnRlbnRIb29rcywgZ2V0Um9vdFZpZXcsIGhvc3RFbGVtZW50LCBpbml0Q2hhbmdlRGV0ZWN0b3JJZkV4aXN0aW5nLCBsZWF2ZVZpZXcsIGxvY2F0ZUhvc3RFbGVtZW50LCBzZXRIb3N0QmluZGluZ3N9IGZyb20gJy4vaW5zdHJ1Y3Rpb25zJztcbmltcG9ydCB7Q29tcG9uZW50RGVmLCBDb21wb25lbnRUeXBlfSBmcm9tICcuL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge0xFbGVtZW50Tm9kZSwgVE5vZGVGbGFnc30gZnJvbSAnLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtSRWxlbWVudCwgUmVuZGVyZXJGYWN0b3J5MywgZG9tUmVuZGVyZXJGYWN0b3J5M30gZnJvbSAnLi9pbnRlcmZhY2VzL3JlbmRlcmVyJztcbmltcG9ydCB7TFZpZXcsIExWaWV3RmxhZ3MsIFJvb3RDb250ZXh0fSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7Y3JlYXRlVmlld1JlZn0gZnJvbSAnLi92aWV3X3JlZic7XG5cblxuXG4vKiogT3B0aW9ucyB0aGF0IGNvbnRyb2wgaG93IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGJvb3RzdHJhcHBlZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQ29tcG9uZW50T3B0aW9ucyB7XG4gIC8qKiBXaGljaCByZW5kZXJlciBmYWN0b3J5IHRvIHVzZS4gKi9cbiAgcmVuZGVyZXJGYWN0b3J5PzogUmVuZGVyZXJGYWN0b3J5MztcblxuICAvKipcbiAgICogSG9zdCBlbGVtZW50IG9uIHdoaWNoIHRoZSBjb21wb25lbnQgd2lsbCBiZSBib290c3RyYXBwZWQuIElmIG5vdCBzcGVjaWZpZWQsXG4gICAqIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbidzIGB0YWdgIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGV4aXN0aW5nIERPTSBmb3IgdGhlXG4gICAqIGVsZW1lbnQgdG8gYm9vdHN0cmFwLlxuICAgKi9cbiAgaG9zdD86IFJFbGVtZW50fHN0cmluZztcblxuICAvKiogTW9kdWxlIGluamVjdG9yIGZvciB0aGUgY29tcG9uZW50LiBJZiB1bnNwZWNpZmllZCwgdGhlIGluamVjdG9yIHdpbGwgYmUgTlVMTF9JTkpFQ1RPUi4gKi9cbiAgaW5qZWN0b3I/OiBJbmplY3RvcjtcblxuICAvKipcbiAgICogTGlzdCBvZiBmZWF0dXJlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBjcmVhdGVkIGNvbXBvbmVudC4gRmVhdHVyZXMgYXJlIHNpbXBseVxuICAgKiBmdW5jdGlvbnMgdGhhdCBkZWNvcmF0ZSBhIGNvbXBvbmVudCB3aXRoIGEgY2VydGFpbiBiZWhhdmlvci5cbiAgICpcbiAgICogVHlwaWNhbGx5LCB0aGUgZmVhdHVyZXMgaW4gdGhpcyBsaXN0IGFyZSBmZWF0dXJlcyB0aGF0IGNhbm5vdCBiZSBhZGRlZCB0byB0aGVcbiAgICogb3RoZXIgZmVhdHVyZXMgbGlzdCBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24gYmVjYXVzZSB0aGV5IHJlbHkgb24gb3RoZXIgZmFjdG9ycy5cbiAgICpcbiAgICogRXhhbXBsZTogYFJvb3RMaWZlY3ljbGVIb29rc2AgaXMgYSBmdW5jdGlvbiB0aGF0IGFkZHMgbGlmZWN5Y2xlIGhvb2sgY2FwYWJpbGl0aWVzXG4gICAqIHRvIHJvb3QgY29tcG9uZW50cyBpbiBhIHRyZWUtc2hha2FibGUgd2F5LiBJdCBjYW5ub3QgYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudFxuICAgKiBmZWF0dXJlcyBsaXN0IGJlY2F1c2UgdGhlcmUncyBubyB3YXkgb2Yga25vd2luZyB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBiZSB1c2VkIGFzXG4gICAqIGEgcm9vdCBjb21wb25lbnQuXG4gICAqL1xuICBob3N0RmVhdHVyZXM/OiAoPFQ+KGNvbXBvbmVudDogVCwgY29tcG9uZW50RGVmOiBDb21wb25lbnREZWY8VD4pID0+IHZvaWQpW107XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gd2hpY2ggaXMgdXNlZCB0byBzY2hlZHVsZSBjaGFuZ2UgZGV0ZWN0aW9uIHdvcmsgaW4gdGhlIGZ1dHVyZS5cbiAgICpcbiAgICogV2hlbiBtYXJraW5nIGNvbXBvbmVudHMgYXMgZGlydHksIGl0IGlzIG5lY2Vzc2FyeSB0byBzY2hlZHVsZSB0aGUgd29yayBvZlxuICAgKiBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZSBmdXR1cmUuIFRoaXMgaXMgZG9uZSB0byBjb2FsZXNjZSBtdWx0aXBsZVxuICAgKiB7QGxpbmsgbWFya0RpcnR5fSBjYWxscyBpbnRvIGEgc2luZ2xlIGNoYW5nZWQgZGV0ZWN0aW9uIHByb2Nlc3NpbmcuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBzY2hlZHVsZXIgaXMgdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBJdCBpcyBhbHNvIHVzZWZ1bCB0byBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgKi9cbiAgc2NoZWR1bGVyPzogKHdvcms6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cblxuLyoqXG4gKiBCb290c3RyYXBzIGEgY29tcG9uZW50LCB0aGVuIGNyZWF0ZXMgYW5kIHJldHVybnMgYSBgQ29tcG9uZW50UmVmYCBmb3IgdGhhdCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFR5cGUgQ29tcG9uZW50IHRvIGJvb3RzdHJhcFxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgcGFyYW1ldGVycyB3aGljaCBjb250cm9sIGJvb3RzdHJhcHBpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudFJlZjxUPihcbiAgICBjb21wb25lbnRUeXBlOiBDb21wb25lbnRUeXBlPFQ+LCBvcHRzOiBDcmVhdGVDb21wb25lbnRPcHRpb25zKTogdmlld0VuZ2luZV9Db21wb25lbnRSZWY8VD4ge1xuICBjb25zdCBjb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQoY29tcG9uZW50VHlwZSwgb3B0cyk7XG4gIGNvbnN0IGhvc3RWaWV3ID0gX2dldENvbXBvbmVudEhvc3RMRWxlbWVudE5vZGUoY29tcG9uZW50KS5kYXRhIGFzIExWaWV3O1xuICBjb25zdCBob3N0Vmlld1JlZiA9IGNyZWF0ZVZpZXdSZWYoaG9zdFZpZXcsIGNvbXBvbmVudCk7XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IHtuYXRpdmVFbGVtZW50OiBnZXRIb3N0RWxlbWVudChjb21wb25lbnQpfSxcbiAgICBpbmplY3Rvcjogb3B0cy5pbmplY3RvciB8fCBOVUxMX0lOSkVDVE9SLFxuICAgIGluc3RhbmNlOiBjb21wb25lbnQsXG4gICAgaG9zdFZpZXc6IGhvc3RWaWV3UmVmLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBob3N0Vmlld1JlZixcbiAgICBjb21wb25lbnRUeXBlOiBjb21wb25lbnRUeXBlLFxuICAgIC8vIFRPRE86IGltcGxlbWVudCBkZXN0cm95IGFuZCBvbkRlc3Ryb3lcbiAgICBkZXN0cm95OiAoKSA9PiB7fSxcbiAgICBvbkRlc3Ryb3k6IChjYjogRnVuY3Rpb24pID0+IHt9XG4gIH07XG59XG5cblxuLy8gVE9ETzogQSBoYWNrIHRvIG5vdCBwdWxsIGluIHRoZSBOdWxsSW5qZWN0b3IgZnJvbSBAYW5ndWxhci9jb3JlLlxuZXhwb3J0IGNvbnN0IE5VTExfSU5KRUNUT1I6IEluamVjdG9yID0ge1xuICBnZXQ6ICh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsSW5qZWN0b3I6IE5vdCBmb3VuZDogJyArIHN0cmluZ2lmeSh0b2tlbikpO1xuICB9XG59O1xuXG4vKipcbiAqIEJvb3RzdHJhcHMgYSBDb21wb25lbnQgaW50byBhbiBleGlzdGluZyBob3N0IGVsZW1lbnQgYW5kIHJldHVybnMgYW4gaW5zdGFuY2VcbiAqIG9mIHRoZSBjb21wb25lbnQuXG4gKlxuICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gYm9vdHN0cmFwIGEgY29tcG9uZW50IGludG8gdGhlIERPTSB0cmVlLiBFYWNoIGludm9jYXRpb25cbiAqIG9mIHRoaXMgZnVuY3Rpb24gd2lsbCBjcmVhdGUgYSBzZXBhcmF0ZSB0cmVlIG9mIGNvbXBvbmVudHMsIGluamVjdG9ycyBhbmRcbiAqIGNoYW5nZSBkZXRlY3Rpb24gY3ljbGVzIGFuZCBsaWZldGltZXMuIFRvIGR5bmFtaWNhbGx5IGluc2VydCBhIG5ldyBjb21wb25lbnRcbiAqIGludG8gYW4gZXhpc3RpbmcgdHJlZSBzdWNoIHRoYXQgaXQgc2hhcmVzIHRoZSBzYW1lIGluamVjdGlvbiwgY2hhbmdlIGRldGVjdGlvblxuICogYW5kIG9iamVjdCBsaWZldGltZSwgdXNlIHtAbGluayBWaWV3Q29udGFpbmVyI2NyZWF0ZUNvbXBvbmVudH0uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFR5cGUgQ29tcG9uZW50IHRvIGJvb3RzdHJhcFxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgcGFyYW1ldGVycyB3aGljaCBjb250cm9sIGJvb3RzdHJhcHBpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudDxUPihcbiAgICBjb21wb25lbnRUeXBlOiBDb21wb25lbnRUeXBlPFQ+fFxuICAgICAgICBUeXBlPFQ+LyogVHlwZSBhcyB3b3JrYXJvdW5kIGZvcjogTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzQ4ODEgKi9cbiAgICAsXG4gICAgb3B0czogQ3JlYXRlQ29tcG9uZW50T3B0aW9ucyA9IHt9KTogVCB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRDb21wb25lbnRUeXBlKGNvbXBvbmVudFR5cGUpO1xuICBjb25zdCByZW5kZXJlckZhY3RvcnkgPSBvcHRzLnJlbmRlcmVyRmFjdG9yeSB8fCBkb21SZW5kZXJlckZhY3RvcnkzO1xuICBjb25zdCBjb21wb25lbnREZWYgPSAoY29tcG9uZW50VHlwZSBhcyBDb21wb25lbnRUeXBlPFQ+KS5uZ0NvbXBvbmVudERlZiBhcyBDb21wb25lbnREZWY8VD47XG4gIGlmIChjb21wb25lbnREZWYudHlwZSAhPSBjb21wb25lbnRUeXBlKSBjb21wb25lbnREZWYudHlwZSA9IGNvbXBvbmVudFR5cGU7XG4gIGxldCBjb21wb25lbnQ6IFQ7XG4gIC8vIFRoZSBmaXJzdCBpbmRleCBvZiB0aGUgZmlyc3Qgc2VsZWN0b3IgaXMgdGhlIHRhZyBuYW1lLlxuICBjb25zdCBjb21wb25lbnRUYWcgPSBjb21wb25lbnREZWYuc2VsZWN0b3JzICFbMF0gIVswXSBhcyBzdHJpbmc7XG4gIGNvbnN0IGhvc3ROb2RlID0gbG9jYXRlSG9zdEVsZW1lbnQocmVuZGVyZXJGYWN0b3J5LCBvcHRzLmhvc3QgfHwgY29tcG9uZW50VGFnKTtcbiAgY29uc3Qgcm9vdENvbnRleHQ6IFJvb3RDb250ZXh0ID0ge1xuICAgIC8vIEluY29tcGxldGUgaW5pdGlhbGl6YXRpb24gZHVlIHRvIGNpcmN1bGFyIHJlZmVyZW5jZS5cbiAgICBjb21wb25lbnQ6IG51bGwgISxcbiAgICBzY2hlZHVsZXI6IG9wdHMuc2NoZWR1bGVyIHx8IHJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyksXG4gICAgY2xlYW46IENMRUFOX1BST01JU0UsXG4gIH07XG4gIGNvbnN0IHJvb3RWaWV3OiBMVmlldyA9IGNyZWF0ZUxWaWV3KFxuICAgICAgLTEsIHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihob3N0Tm9kZSwgY29tcG9uZW50RGVmLnJlbmRlcmVyVHlwZSksXG4gICAgICBjcmVhdGVUVmlldyhudWxsLCBudWxsKSwgbnVsbCwgcm9vdENvbnRleHQsXG4gICAgICBjb21wb25lbnREZWYub25QdXNoID8gTFZpZXdGbGFncy5EaXJ0eSA6IExWaWV3RmxhZ3MuQ2hlY2tBbHdheXMpO1xuICByb290Vmlldy5pbmplY3RvciA9IG9wdHMuaW5qZWN0b3IgfHwgbnVsbDtcblxuICBjb25zdCBvbGRWaWV3ID0gZW50ZXJWaWV3KHJvb3RWaWV3LCBudWxsICEpO1xuICBsZXQgZWxlbWVudE5vZGU6IExFbGVtZW50Tm9kZTtcbiAgdHJ5IHtcbiAgICBpZiAocmVuZGVyZXJGYWN0b3J5LmJlZ2luKSByZW5kZXJlckZhY3RvcnkuYmVnaW4oKTtcblxuICAgIC8vIENyZWF0ZSBlbGVtZW50IG5vZGUgYXQgaW5kZXggMCBpbiBkYXRhIGFycmF5XG4gICAgZWxlbWVudE5vZGUgPSBob3N0RWxlbWVudChjb21wb25lbnRUYWcsIGhvc3ROb2RlLCBjb21wb25lbnREZWYpO1xuXG4gICAgLy8gQ3JlYXRlIGRpcmVjdGl2ZSBpbnN0YW5jZSB3aXRoIGZhY3RvcnkoKSBhbmQgc3RvcmUgYXQgaW5kZXggMCBpbiBkaXJlY3RpdmVzIGFycmF5XG4gICAgY29tcG9uZW50ID0gcm9vdENvbnRleHQuY29tcG9uZW50ID1cbiAgICAgICAgYmFzZURpcmVjdGl2ZUNyZWF0ZSgwLCBjb21wb25lbnREZWYuZmFjdG9yeSgpLCBjb21wb25lbnREZWYpIGFzIFQ7XG4gICAgaW5pdENoYW5nZURldGVjdG9ySWZFeGlzdGluZyhlbGVtZW50Tm9kZS5ub2RlSW5qZWN0b3IsIGNvbXBvbmVudCwgZWxlbWVudE5vZGUuZGF0YSAhKTtcblxuICAgIG9wdHMuaG9zdEZlYXR1cmVzICYmIG9wdHMuaG9zdEZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IGZlYXR1cmUoY29tcG9uZW50LCBjb21wb25lbnREZWYpKTtcblxuICAgIGV4ZWN1dGVJbml0QW5kQ29udGVudEhvb2tzKCk7XG4gICAgc2V0SG9zdEJpbmRpbmdzKFJPT1RfRElSRUNUSVZFX0lORElDRVMpO1xuICAgIGRldGVjdENoYW5nZXNJbnRlcm5hbChlbGVtZW50Tm9kZS5kYXRhIGFzIExWaWV3LCBlbGVtZW50Tm9kZSwgY29tcG9uZW50RGVmLCBjb21wb25lbnQpO1xuICB9IGZpbmFsbHkge1xuICAgIGxlYXZlVmlldyhvbGRWaWV3KTtcbiAgICBpZiAocmVuZGVyZXJGYWN0b3J5LmVuZCkgcmVuZGVyZXJGYWN0b3J5LmVuZCgpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGVuYWJsZSBsaWZlY3ljbGUgaG9va3Mgb24gdGhlIHJvb3QgY29tcG9uZW50LlxuICpcbiAqIEluY2x1ZGUgdGhpcyBmZWF0dXJlIHdoZW4gY2FsbGluZyBgcmVuZGVyQ29tcG9uZW50YCBpZiB0aGUgcm9vdCBjb21wb25lbnRcbiAqIHlvdSBhcmUgcmVuZGVyaW5nIGhhcyBsaWZlY3ljbGUgaG9va3MgZGVmaW5lZC4gT3RoZXJ3aXNlLCB0aGUgaG9va3Mgd29uJ3RcbiAqIGJlIGNhbGxlZCBwcm9wZXJseS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogcmVuZGVyQ29tcG9uZW50KEFwcENvbXBvbmVudCwge2ZlYXR1cmVzOiBbUm9vdExpZmVjeWNsZUhvb2tzXX0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMaWZlY3ljbGVIb29rc0ZlYXR1cmUoY29tcG9uZW50OiBhbnksIGRlZjogQ29tcG9uZW50RGVmPGFueT4pOiB2b2lkIHtcbiAgY29uc3QgZWxlbWVudE5vZGUgPSBfZ2V0Q29tcG9uZW50SG9zdExFbGVtZW50Tm9kZShjb21wb25lbnQpO1xuXG4gIC8vIFJvb3QgY29tcG9uZW50IGlzIGFsd2F5cyBjcmVhdGVkIGF0IGRpciBpbmRleCAwXG4gIHF1ZXVlSW5pdEhvb2tzKDAsIGRlZi5vbkluaXQsIGRlZi5kb0NoZWNrLCBlbGVtZW50Tm9kZS52aWV3LnRWaWV3KTtcbiAgcXVldWVMaWZlY3ljbGVIb29rcyhlbGVtZW50Tm9kZS50Tm9kZSAhLmZsYWdzLCBlbGVtZW50Tm9kZS52aWV3KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgcm9vdCBjb250ZXh0IGZvciBhbnkgY29tcG9uZW50IGJ5IHdhbGtpbmcgdGhlIHBhcmVudCBgTFZpZXdgIHVudGlsXG4gKiByZWFjaGluZyB0aGUgcm9vdCBgTFZpZXdgLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnQgYW55IGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRSb290Q29udGV4dChjb21wb25lbnQ6IGFueSk6IFJvb3RDb250ZXh0IHtcbiAgY29uc3Qgcm9vdENvbnRleHQgPSBnZXRSb290Vmlldyhjb21wb25lbnQpLmNvbnRleHQgYXMgUm9vdENvbnRleHQ7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnROb3ROdWxsKHJvb3RDb250ZXh0LCAncm9vdENvbnRleHQnKTtcbiAgcmV0dXJuIHJvb3RDb250ZXh0O1xufVxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBob3N0IGVsZW1lbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAqXG4gKiBVc2UgdGhpcyBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgaG9zdCBlbGVtZW50IG9mIHRoZSBjb21wb25lbnQuIFRoZSBob3N0XG4gKiBlbGVtZW50IGlzIHRoZSBlbGVtZW50IHdoaWNoIHRoZSBjb21wb25lbnQgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGZvciB3aGljaCB0aGUgaG9zdCBlbGVtZW50IHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0RWxlbWVudDxUPihjb21wb25lbnQ6IFQpOiBIVE1MRWxlbWVudCB7XG4gIHJldHVybiBfZ2V0Q29tcG9uZW50SG9zdExFbGVtZW50Tm9kZShjb21wb25lbnQpLm5hdGl2ZSBhcyBhbnk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSByZW5kZXJlZCB0ZXh0IGZvciBhIGdpdmVuIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgaG9zdCBlbGVtZW50IG9mIGEgY29tcG9uZW50IGFuZFxuICogYW5kIHRoZW4gcmV0dXJucyB0aGUgYHRleHRDb250ZW50YCBmb3IgdGhhdCBlbGVtZW50LiBUaGlzIGltcGxpZXNcbiAqIHRoYXQgdGhlIHRleHQgcmV0dXJuZWQgd2lsbCBpbmNsdWRlIHJlLXByb2plY3RlZCBjb250ZW50IG9mXG4gKiB0aGUgY29tcG9uZW50IGFzIHdlbGwuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJldHVybiB0aGUgY29udGVudCB0ZXh0IGZvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlcmVkVGV4dChjb21wb25lbnQ6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IGhvc3RFbGVtZW50ID0gZ2V0SG9zdEVsZW1lbnQoY29tcG9uZW50KTtcbiAgcmV0dXJuIGhvc3RFbGVtZW50LnRleHRDb250ZW50IHx8ICcnO1xufVxuXG4vKipcbiAqIFdhaXQgb24gY29tcG9uZW50IHVudGlsIGl0IGlzIHJlbmRlcmVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGBQcm9taXNlYCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBjb21wb25lbnQnc1xuICogY2hhbmdlIGRldGVjdGlvbiBpcyBleGVjdXRlZC4gVGhpcyBpcyBkZXRlcm1pbmVkIGJ5IGZpbmRpbmcgdGhlIHNjaGVkdWxlclxuICogYXNzb2NpYXRlZCB3aXRoIHRoZSBgY29tcG9uZW50YCdzIHJlbmRlciB0cmVlIGFuZCB3YWl0aW5nIHVudGlsIHRoZSBzY2hlZHVsZXJcbiAqIGZsdXNoZXMuIElmIG5vdGhpbmcgaXMgc2NoZWR1bGVkLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIHJlc29sdmVkIHByb21pc2UuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYFxuICogYXdhaXQgd2hlblJlbmRlcmVkKG15Q29tcG9uZW50KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IHRvIHdhaXQgdXBvblxuICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGVuUmVuZGVyZWQoY29tcG9uZW50OiBhbnkpOiBQcm9taXNlPG51bGw+IHtcbiAgcmV0dXJuIGdldFJvb3RDb250ZXh0KGNvbXBvbmVudCkuY2xlYW47XG59XG4iXX0=