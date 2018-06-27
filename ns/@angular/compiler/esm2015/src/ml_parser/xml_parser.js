/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Parser } from './parser';
import { getXmlTagDefinition } from './xml_tags';
export { ParseTreeResult, TreeError } from './parser';
export class XmlParser extends Parser {
    constructor() { super(getXmlTagDefinition); }
    parse(source, url, parseExpansionForms = false) {
        return super.parse(source, url, parseExpansionForms);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIveG1sX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWtCLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFcEQsTUFBTSxnQkFBaUIsU0FBUSxNQUFNO0lBQ25DLGdCQUFnQixLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0MsS0FBSyxDQUFDLE1BQWMsRUFBRSxHQUFXLEVBQUUsc0JBQStCLEtBQUs7UUFDckUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQYXJzZVRyZWVSZXN1bHQsIFBhcnNlcn0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tICcuL3htbF90YWdzJztcblxuZXhwb3J0IHtQYXJzZVRyZWVSZXN1bHQsIFRyZWVFcnJvcn0gZnJvbSAnLi9wYXJzZXInO1xuXG5leHBvcnQgY2xhc3MgWG1sUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKGdldFhtbFRhZ0RlZmluaXRpb24pOyB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwYXJzZUV4cGFuc2lvbkZvcm1zOiBib29sZWFuID0gZmFsc2UpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHJldHVybiBzdXBlci5wYXJzZShzb3VyY2UsIHVybCwgcGFyc2VFeHBhbnNpb25Gb3Jtcyk7XG4gIH1cbn1cbiJdfQ==