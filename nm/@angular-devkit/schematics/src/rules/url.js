"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const url_1 = require("url");
function url(urlString) {
    const url = url_1.parse(urlString);
    return (context) => context.engine.createSourceFromUrl(url, context)(context);
}
exports.url = url;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy9ydWxlcy91cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCw2QkFBNEI7QUFJNUIsYUFBb0IsU0FBaUI7SUFDbkMsTUFBTSxHQUFHLEdBQUcsV0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTdCLE1BQU0sQ0FBQyxDQUFDLE9BQXlCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xHLENBQUM7QUFKRCxrQkFJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCB7IFNjaGVtYXRpY0NvbnRleHQsIFNvdXJjZSB9IGZyb20gJy4uL2VuZ2luZS9pbnRlcmZhY2UnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cmwodXJsU3RyaW5nOiBzdHJpbmcpOiBTb3VyY2Uge1xuICBjb25zdCB1cmwgPSBwYXJzZSh1cmxTdHJpbmcpO1xuXG4gIHJldHVybiAoY29udGV4dDogU2NoZW1hdGljQ29udGV4dCkgPT4gY29udGV4dC5lbmdpbmUuY3JlYXRlU291cmNlRnJvbVVybCh1cmwsIGNvbnRleHQpKGNvbnRleHQpO1xufVxuIl19