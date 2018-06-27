/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException, Path, virtualFs } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { FileReplacement } from '../browser/schema';
export declare class MissingFileReplacementException extends BaseException {
    constructor(path: String);
}
export declare function addFileReplacements(root: Path, host: virtualFs.AliasHost, fileReplacements: FileReplacement[]): Observable<null>;
