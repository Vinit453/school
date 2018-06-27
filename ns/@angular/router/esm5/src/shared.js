/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Name of the primary outlet.
 *
 *
 */
export var PRIMARY_OUTLET = 'primary';
var ParamsAsMap = /** @class */ (function () {
    function ParamsAsMap(params) {
        this.params = params || {};
    }
    ParamsAsMap.prototype.has = function (name) { return this.params.hasOwnProperty(name); };
    ParamsAsMap.prototype.get = function (name) {
        if (this.has(name)) {
            var v = this.params[name];
            return Array.isArray(v) ? v[0] : v;
        }
        return null;
    };
    ParamsAsMap.prototype.getAll = function (name) {
        if (this.has(name)) {
            var v = this.params[name];
            return Array.isArray(v) ? v : [v];
        }
        return [];
    };
    Object.defineProperty(ParamsAsMap.prototype, "keys", {
        get: function () { return Object.keys(this.params); },
        enumerable: true,
        configurable: true
    });
    return ParamsAsMap;
}());
/**
 * Convert a `Params` instance to a `ParamMap`.
 *
 *
 */
export function convertToParamMap(params) {
    return new ParamsAsMap(params);
}
var NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
export function navigationCancelingError(message) {
    var error = Error('NavigationCancelingError: ' + message);
    error[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}
export function isNavigationCancelingError(error) {
    return error && error[NAVIGATION_CANCELING_ERROR];
}
// Matches the route configuration (`route`) against the actual URL (`segments`).
export function defaultUrlMatcher(segments, segmentGroup, route) {
    var parts = route.path.split('/');
    if (parts.length > segments.length) {
        // The actual URL is shorter than the config, no match
        return null;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || parts.length < segments.length)) {
        // The config is longer than the actual URL but we are looking for a full match, return null
        return null;
    }
    var posParams = {};
    // Check each config part against the actual URL
    for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        var segment = segments[index];
        var isParameter = part.startsWith(':');
        if (isParameter) {
            posParams[part.substring(1)] = segment;
        }
        else if (part !== segment.path) {
            // The actual URL part does not match the config, no match
            return null;
        }
    }
    return { consumed: segments.slice(0, parts.length), posParams: posParams };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsTUFBTSxDQUFDLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQztBQTJDeEMsSUFBQTtJQUdFLHFCQUFZLE1BQWM7UUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7S0FBRTtJQUUzRCx5QkFBRyxHQUFILFVBQUksSUFBWSxJQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO0lBRXZFLHlCQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ1g7SUFFRCxzQkFBSSw2QkFBSTthQUFSLGNBQXVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFOzs7T0FBQTtzQkF2RjNEO0lBd0ZDLENBQUE7Ozs7OztBQU9ELE1BQU0sNEJBQTRCLE1BQWM7SUFDOUMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2hDO0FBRUQsSUFBTSwwQkFBMEIsR0FBRyw0QkFBNEIsQ0FBQztBQUVoRSxNQUFNLG1DQUFtQyxPQUFlO0lBQ3RELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUMzRCxLQUFhLENBQUMsMEJBQTBCLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQztDQUNkO0FBRUQsTUFBTSxxQ0FBcUMsS0FBWTtJQUNyRCxNQUFNLENBQUMsS0FBSyxJQUFLLEtBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0NBQzVEOztBQUdELE1BQU0sNEJBQ0YsUUFBc0IsRUFBRSxZQUE2QixFQUFFLEtBQVk7SUFDckUsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFdEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7UUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNO1FBQzFCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFbkUsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBTSxTQUFTLEdBQWdDLEVBQUUsQ0FBQzs7SUFHbEQsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDbEQsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUVqQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUVELE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUMsQ0FBQztDQUMvRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSb3V0ZSwgVXJsTWF0Y2hSZXN1bHR9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7VXJsU2VnbWVudCwgVXJsU2VnbWVudEdyb3VwfSBmcm9tICcuL3VybF90cmVlJztcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE5hbWUgb2YgdGhlIHByaW1hcnkgb3V0bGV0LlxuICpcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQUklNQVJZX09VVExFVCA9ICdwcmltYXJ5JztcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgcGFyYW1ldGVycy5cbiAqXG4gKlxuICovXG5leHBvcnQgdHlwZSBQYXJhbXMgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufTtcblxuLyoqXG4gKiBNYXRyaXggYW5kIFF1ZXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogYFBhcmFtTWFwYCBtYWtlcyBpdCBlYXNpZXIgdG8gd29yayB3aXRoIHBhcmFtZXRlcnMgYXMgdGhleSBjb3VsZCBoYXZlIGVpdGhlciBhIHNpbmdsZSB2YWx1ZSBvclxuICogbXVsdGlwbGUgdmFsdWUuIEJlY2F1c2UgdGhpcyBzaG91bGQgYmUga25vd24gYnkgdGhlIHVzZXIsIGNhbGxpbmcgYGdldGAgb3IgYGdldEFsbGAgcmV0dXJucyB0aGVcbiAqIGNvcnJlY3QgdHlwZSAoZWl0aGVyIGBzdHJpbmdgIG9yIGBzdHJpbmdbXWApLlxuICpcbiAqIFRoZSBBUEkgaXMgaW5zcGlyZWQgYnkgdGhlIFVSTFNlYXJjaFBhcmFtcyBpbnRlcmZhY2UuXG4gKiBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1VSTFNlYXJjaFBhcmFtc1xuICpcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1NYXAge1xuICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFJldHVybiBhIHNpbmdsZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHBhcmFtZXRlciBuYW1lOlxuICAgKiAtIHRoZSB2YWx1ZSB3aGVuIHRoZSBwYXJhbWV0ZXIgaGFzIGEgc2luZ2xlIHZhbHVlLFxuICAgKiAtIHRoZSBmaXJzdCB2YWx1ZSBpZiB0aGUgcGFyYW1ldGVyIGhhcyBtdWx0aXBsZSB2YWx1ZXMsXG4gICAqIC0gYG51bGxgIHdoZW4gdGhlcmUgaXMgbm8gc3VjaCBwYXJhbWV0ZXIuXG4gICAqL1xuICBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nfG51bGw7XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gcGFyYW1ldGVyIG5hbWUuXG4gICAqXG4gICAqIElmIHRoZXJlIGlzIG5vIHN1Y2ggcGFyYW1ldGVyLCBhbiBlbXB0eSBhcnJheSBpcyByZXR1cm5lZC5cbiAgICovXG4gIGdldEFsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICAvKiogTmFtZSBvZiB0aGUgcGFyYW1ldGVycyAqL1xuICByZWFkb25seSBrZXlzOiBzdHJpbmdbXTtcbn1cblxuY2xhc3MgUGFyYW1zQXNNYXAgaW1wbGVtZW50cyBQYXJhbU1hcCB7XG4gIHByaXZhdGUgcGFyYW1zOiBQYXJhbXM7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBQYXJhbXMpIHsgdGhpcy5wYXJhbXMgPSBwYXJhbXMgfHwge307IH1cblxuICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShuYW1lKTsgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5wYXJhbXNbbmFtZV07XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2KSA/IHZbMF0gOiB2O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsKG5hbWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnBhcmFtc1tuYW1lXTtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHYpID8gdiA6IFt2XTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXQga2V5cygpOiBzdHJpbmdbXSB7IHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7IH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgYFBhcmFtc2AgaW5zdGFuY2UgdG8gYSBgUGFyYW1NYXBgLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9QYXJhbU1hcChwYXJhbXM6IFBhcmFtcyk6IFBhcmFtTWFwIHtcbiAgcmV0dXJuIG5ldyBQYXJhbXNBc01hcChwYXJhbXMpO1xufVxuXG5jb25zdCBOQVZJR0FUSU9OX0NBTkNFTElOR19FUlJPUiA9ICduZ05hdmlnYXRpb25DYW5jZWxpbmdFcnJvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uQ2FuY2VsaW5nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gIGNvbnN0IGVycm9yID0gRXJyb3IoJ05hdmlnYXRpb25DYW5jZWxpbmdFcnJvcjogJyArIG1lc3NhZ2UpO1xuICAoZXJyb3IgYXMgYW55KVtOQVZJR0FUSU9OX0NBTkNFTElOR19FUlJPUl0gPSB0cnVlO1xuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hdmlnYXRpb25DYW5jZWxpbmdFcnJvcihlcnJvcjogRXJyb3IpIHtcbiAgcmV0dXJuIGVycm9yICYmIChlcnJvciBhcyBhbnkpW05BVklHQVRJT05fQ0FOQ0VMSU5HX0VSUk9SXTtcbn1cblxuLy8gTWF0Y2hlcyB0aGUgcm91dGUgY29uZmlndXJhdGlvbiAoYHJvdXRlYCkgYWdhaW5zdCB0aGUgYWN0dWFsIFVSTCAoYHNlZ21lbnRzYCkuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFVybE1hdGNoZXIoXG4gICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlOiBSb3V0ZSk6IFVybE1hdGNoUmVzdWx0fG51bGwge1xuICBjb25zdCBwYXJ0cyA9IHJvdXRlLnBhdGggIS5zcGxpdCgnLycpO1xuXG4gIGlmIChwYXJ0cy5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChyb3V0ZS5wYXRoTWF0Y2ggPT09ICdmdWxsJyAmJlxuICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aCkpIHtcbiAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcG9zUGFyYW1zOiB7W2tleTogc3RyaW5nXTogVXJsU2VnbWVudH0gPSB7fTtcblxuICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhcnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICBjb25zdCBpc1BhcmFtZXRlciA9IHBhcnQuc3RhcnRzV2l0aCgnOicpO1xuICAgIGlmIChpc1BhcmFtZXRlcikge1xuICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgfSBlbHNlIGlmIChwYXJ0ICE9PSBzZWdtZW50LnBhdGgpIHtcbiAgICAgIC8vIFRoZSBhY3R1YWwgVVJMIHBhcnQgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7Y29uc3VtZWQ6IHNlZ21lbnRzLnNsaWNlKDAsIHBhcnRzLmxlbmd0aCksIHBvc1BhcmFtc307XG59XG4iXX0=