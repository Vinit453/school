"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const __1 = require("..");
const exception_1 = require("../exception/exception");
class ProjectNotFoundException extends exception_1.BaseException {
    constructor(name) {
        super(`Project '${name}' could not be found in workspace.`);
    }
}
exports.ProjectNotFoundException = ProjectNotFoundException;
class WorkspaceToolNotFoundException extends exception_1.BaseException {
    constructor(name) {
        super(`Tool ${name} could not be found in workspace.`);
    }
}
exports.WorkspaceToolNotFoundException = WorkspaceToolNotFoundException;
class ProjectToolNotFoundException extends exception_1.BaseException {
    constructor(name) {
        super(`Tool ${name} could not be found in project.`);
    }
}
exports.ProjectToolNotFoundException = ProjectToolNotFoundException;
class WorkspaceNotYetLoadedException extends exception_1.BaseException {
    constructor() { super(`Workspace needs to be loaded before it is used.`); }
}
exports.WorkspaceNotYetLoadedException = WorkspaceNotYetLoadedException;
class Workspace {
    constructor(_root, _host) {
        this._root = _root;
        this._host = _host;
        this._workspaceSchemaPath = __1.join(__1.normalize(__dirname), 'workspace-schema.json');
        this._registry = new __1.schema.CoreSchemaRegistry();
    }
    loadWorkspaceFromJson(json) {
        return this._loadWorkspaceSchema().pipe(operators_1.concatMap((workspaceSchema) => this.validateAgainstSchema(json, workspaceSchema)), operators_1.tap((validatedWorkspace) => this._workspace = validatedWorkspace), operators_1.map(() => this));
    }
    loadWorkspaceFromHost(workspacePath) {
        return this._loadWorkspaceSchema().pipe(operators_1.concatMap(() => this._loadJsonFile(__1.join(this._root, workspacePath))), operators_1.concatMap(json => this.loadWorkspaceFromJson(json)));
    }
    _loadWorkspaceSchema() {
        if (this._workspaceSchema) {
            return rxjs_1.of(this._workspaceSchema);
        }
        else {
            return this._loadJsonFile(this._workspaceSchemaPath).pipe(operators_1.tap((workspaceSchema) => this._workspaceSchema = workspaceSchema));
        }
    }
    _assertLoaded() {
        if (!this._workspace) {
            throw new WorkspaceNotYetLoadedException();
        }
    }
    get root() {
        return this._root;
    }
    get host() {
        return this._host;
    }
    get version() {
        this._assertLoaded();
        return this._workspace.version;
    }
    get newProjectRoot() {
        this._assertLoaded();
        return this._workspace.newProjectRoot;
    }
    listProjectNames() {
        return Object.keys(this._workspace.projects);
    }
    getProject(projectName) {
        this._assertLoaded();
        const workspaceProject = this._workspace.projects[projectName];
        if (!workspaceProject) {
            throw new ProjectNotFoundException(projectName);
        }
        return Object.assign({}, workspaceProject, { 
            // Return only the project properties, and remove the tools.
            cli: {}, schematics: {}, architect: {} });
    }
    getDefaultProjectName() {
        this._assertLoaded();
        if (this._workspace.defaultProject) {
            // If there is a default project name, return it.
            return this._workspace.defaultProject;
        }
        else if (this.listProjectNames().length === 1) {
            // If there is only one project, return that one.
            return this.listProjectNames()[0];
        }
        // Otherwise return null.
        return null;
    }
    getProjectByPath(path) {
        this._assertLoaded();
        const projectNames = this.listProjectNames();
        if (projectNames.length === 1) {
            return projectNames[0];
        }
        const isInside = (base, potential) => {
            const absoluteBase = __1.resolve(this.root, base);
            const absolutePotential = __1.resolve(this.root, potential);
            const relativePotential = __1.relative(absoluteBase, absolutePotential);
            if (!relativePotential.startsWith('..') && !__1.isAbsolute(relativePotential)) {
                return true;
            }
            return false;
        };
        const projects = this.listProjectNames()
            .map(name => [this.getProject(name).root, name])
            .filter(tuple => isInside(tuple[0], path))
            .sort((a, b) => isInside(a[0], b[0]) ? 1 : 0);
        if (projects[0]) {
            return projects[0][1];
        }
        return null;
    }
    getCli() {
        return this._getTool('cli');
    }
    getSchematics() {
        return this._getTool('schematics');
    }
    getArchitect() {
        return this._getTool('architect');
    }
    getProjectCli(projectName) {
        return this._getProjectTool(projectName, 'cli');
    }
    getProjectSchematics(projectName) {
        return this._getProjectTool(projectName, 'schematics');
    }
    getProjectArchitect(projectName) {
        return this._getProjectTool(projectName, 'architect');
    }
    _getTool(toolName) {
        this._assertLoaded();
        const workspaceTool = this._workspace[toolName];
        if (!workspaceTool) {
            throw new WorkspaceToolNotFoundException(toolName);
        }
        return workspaceTool;
    }
    _getProjectTool(projectName, toolName) {
        this._assertLoaded();
        const workspaceProject = this._workspace.projects[projectName];
        if (!workspaceProject) {
            throw new ProjectNotFoundException(projectName);
        }
        const projectTool = workspaceProject[toolName];
        if (!projectTool) {
            throw new ProjectToolNotFoundException(toolName);
        }
        return projectTool;
    }
    // TODO: add transforms to resolve paths.
    validateAgainstSchema(contentJson, schemaJson) {
        // JSON validation modifies the content, so we validate a copy of it instead.
        const contentJsonCopy = JSON.parse(JSON.stringify(contentJson));
        return this._registry.compile(schemaJson).pipe(operators_1.concatMap(validator => validator(contentJsonCopy)), operators_1.concatMap(validatorResult => {
            if (validatorResult.success) {
                return rxjs_1.of(contentJsonCopy);
            }
            else {
                return rxjs_1.throwError(new __1.schema.SchemaValidationException(validatorResult.errors));
            }
        }));
    }
    _loadJsonFile(path) {
        return this._host.read(__1.normalize(path)).pipe(operators_1.map(buffer => __1.virtualFs.fileBufferToString(buffer)), operators_1.map(str => __1.parseJson(str, __1.JsonParseMode.Loose)));
    }
}
exports.Workspace = Workspace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9jb3JlL3NyYy93b3Jrc3BhY2Uvd29ya3NwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7O0FBRUgsK0JBQWtEO0FBQ2xELDhDQUFxRDtBQUNyRCwwQkFZWTtBQUNaLHNEQUF1RDtBQUl2RCw4QkFBc0MsU0FBUSx5QkFBYTtJQUN6RCxZQUFZLElBQVk7UUFDdEIsS0FBSyxDQUFDLFlBQVksSUFBSSxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQUpELDREQUlDO0FBRUQsb0NBQTRDLFNBQVEseUJBQWE7SUFDL0QsWUFBWSxJQUFZO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLElBQUksbUNBQW1DLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0Y7QUFKRCx3RUFJQztBQUVELGtDQUEwQyxTQUFRLHlCQUFhO0lBQzdELFlBQVksSUFBWTtRQUN0QixLQUFLLENBQUMsUUFBUSxJQUFJLGlDQUFpQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNGO0FBSkQsb0VBSUM7QUFFRCxvQ0FBNEMsU0FBUSx5QkFBYTtJQUMvRCxnQkFBZ0IsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVFO0FBRkQsd0VBRUM7QUFHRDtJQU1FLFlBQW9CLEtBQVcsRUFBVSxLQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFMakQseUJBQW9CLEdBQUcsUUFBSSxDQUFDLGFBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBTTFGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQscUJBQXFCLENBQUMsSUFBUTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFD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NkVBQTZFO1FBQzdFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQzVDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFDbEQscUJBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMxQixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLFNBQUUsQ0FBQyxlQUFvQixDQUFDLENBQUM7WUFDbEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLElBQUksVUFBTSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFVO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzFDLGVBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNuRCxlQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFTLENBQUMsR0FBRyxFQUFFLGlCQUFhLENBQUMsS0FBSyxDQUFxQixDQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFqTkQsOEJBaU5DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEpzb25PYmplY3QsXG4gIEpzb25QYXJzZU1vZGUsXG4gIFBhdGgsXG4gIGlzQWJzb2x1dGUsXG4gIGpvaW4sXG4gIG5vcm1hbGl6ZSxcbiAgcGFyc2VKc29uLFxuICByZWxhdGl2ZSxcbiAgcmVzb2x2ZSxcbiAgc2NoZW1hLFxuICB2aXJ0dWFsRnMsXG59IGZyb20gJy4uJztcbmltcG9ydCB7IEJhc2VFeGNlcHRpb24gfSBmcm9tICcuLi9leGNlcHRpb24vZXhjZXB0aW9uJztcbmltcG9ydCB7IFdvcmtzcGFjZVByb2plY3QsIFdvcmtzcGFjZVNjaGVtYSwgV29ya3NwYWNlVG9vbCB9IGZyb20gJy4vd29ya3NwYWNlLXNjaGVtYSc7XG5cblxuZXhwb3J0IGNsYXNzIFByb2plY3ROb3RGb3VuZEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgUHJvamVjdCAnJHtuYW1lfScgY291bGQgbm90IGJlIGZvdW5kIGluIHdvcmtzcGFjZS5gKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlVG9vbE5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBUb29sICR7bmFtZX0gY291bGQgbm90IGJlIGZvdW5kIGluIHdvcmtzcGFjZS5gKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdFRvb2xOb3RGb3VuZEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgVG9vbCAke25hbWV9IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiBwcm9qZWN0LmApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VOb3RZZXRMb2FkZWRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKGBXb3Jrc3BhY2UgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBpdCBpcyB1c2VkLmApOyB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3dvcmtzcGFjZVNjaGVtYVBhdGggPSBqb2luKG5vcm1hbGl6ZShfX2Rpcm5hbWUpLCAnd29ya3NwYWNlLXNjaGVtYS5qc29uJyk7XG4gIHByaXZhdGUgX3dvcmtzcGFjZVNjaGVtYTogSnNvbk9iamVjdDtcbiAgcHJpdmF0ZSBfd29ya3NwYWNlOiBXb3Jrc3BhY2VTY2hlbWE7XG4gIHByaXZhdGUgX3JlZ2lzdHJ5OiBzY2hlbWEuQ29yZVNjaGVtYVJlZ2lzdHJ5O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jvb3Q6IFBhdGgsIHByaXZhdGUgX2hvc3Q6IHZpcnR1YWxGcy5Ib3N0PHt9Pikge1xuICAgIHRoaXMuX3JlZ2lzdHJ5ID0gbmV3IHNjaGVtYS5Db3JlU2NoZW1hUmVnaXN0cnkoKTtcbiAgfVxuXG4gIGxvYWRXb3Jrc3BhY2VGcm9tSnNvbihqc29uOiB7fSkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkV29ya3NwYWNlU2NoZW1hKCkucGlwZShcbiAgICAgIGNvbmNhdE1hcCgod29ya3NwYWNlU2NoZW1hKSA9PiB0aGlzLnZhbGlkYXRlQWdhaW5zdFNjaGVtYShqc29uLCB3b3Jrc3BhY2VTY2hlbWEpKSxcbiAgICAgIHRhcCgodmFsaWRhdGVkV29ya3NwYWNlOiBXb3Jrc3BhY2VTY2hlbWEpID0+IHRoaXMuX3dvcmtzcGFjZSA9IHZhbGlkYXRlZFdvcmtzcGFjZSksXG4gICAgICBtYXAoKCkgPT4gdGhpcyksXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRXb3Jrc3BhY2VGcm9tSG9zdCh3b3Jrc3BhY2VQYXRoOiBQYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRXb3Jrc3BhY2VTY2hlbWEoKS5waXBlKFxuICAgICAgY29uY2F0TWFwKCgpID0+IHRoaXMuX2xvYWRKc29uRmlsZShqb2luKHRoaXMuX3Jvb3QsIHdvcmtzcGFjZVBhdGgpKSksXG4gICAgICBjb25jYXRNYXAoanNvbiA9PiB0aGlzLmxvYWRXb3Jrc3BhY2VGcm9tSnNvbihqc29uKSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRXb3Jrc3BhY2VTY2hlbWEoKSB7XG4gICAgaWYgKHRoaXMuX3dvcmtzcGFjZVNjaGVtYSkge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuX3dvcmtzcGFjZVNjaGVtYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkSnNvbkZpbGUodGhpcy5fd29ya3NwYWNlU2NoZW1hUGF0aCkucGlwZShcbiAgICAgICAgdGFwKCh3b3Jrc3BhY2VTY2hlbWEpID0+IHRoaXMuX3dvcmtzcGFjZVNjaGVtYSA9IHdvcmtzcGFjZVNjaGVtYSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Fzc2VydExvYWRlZCgpIHtcbiAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtzcGFjZU5vdFlldExvYWRlZEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCByb290KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290O1xuICB9XG5cbiAgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cblxuICBnZXQgdmVyc2lvbigpIHtcbiAgICB0aGlzLl9hc3NlcnRMb2FkZWQoKTtcblxuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2UudmVyc2lvbjtcbiAgfVxuXG4gIGdldCBuZXdQcm9qZWN0Um9vdCgpIHtcbiAgICB0aGlzLl9hc3NlcnRMb2FkZWQoKTtcblxuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2UubmV3UHJvamVjdFJvb3Q7XG4gIH1cblxuICBsaXN0UHJvamVjdE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fd29ya3NwYWNlLnByb2plY3RzKTtcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWU6IHN0cmluZyk6IFdvcmtzcGFjZVByb2plY3Qge1xuICAgIHRoaXMuX2Fzc2VydExvYWRlZCgpO1xuXG4gICAgY29uc3Qgd29ya3NwYWNlUHJvamVjdCA9IHRoaXMuX3dvcmtzcGFjZS5wcm9qZWN0c1twcm9qZWN0TmFtZV07XG5cbiAgICBpZiAoIXdvcmtzcGFjZVByb2plY3QpIHtcbiAgICAgIHRocm93IG5ldyBQcm9qZWN0Tm90Rm91bmRFeGNlcHRpb24ocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi53b3Jrc3BhY2VQcm9qZWN0LFxuICAgICAgLy8gUmV0dXJuIG9ubHkgdGhlIHByb2plY3QgcHJvcGVydGllcywgYW5kIHJlbW92ZSB0aGUgdG9vbHMuXG4gICAgICBjbGk6IHt9LFxuICAgICAgc2NoZW1hdGljczoge30sXG4gICAgICBhcmNoaXRlY3Q6IHt9LFxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0UHJvamVjdE5hbWUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgdGhpcy5fYXNzZXJ0TG9hZGVkKCk7XG5cbiAgICBpZiAodGhpcy5fd29ya3NwYWNlLmRlZmF1bHRQcm9qZWN0KSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGRlZmF1bHQgcHJvamVjdCBuYW1lLCByZXR1cm4gaXQuXG4gICAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlLmRlZmF1bHRQcm9qZWN0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5saXN0UHJvamVjdE5hbWVzKCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IG9uZSBwcm9qZWN0LCByZXR1cm4gdGhhdCBvbmUuXG4gICAgICByZXR1cm4gdGhpcy5saXN0UHJvamVjdE5hbWVzKClbMF07XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIHJldHVybiBudWxsLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UHJvamVjdEJ5UGF0aChwYXRoOiBQYXRoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgdGhpcy5fYXNzZXJ0TG9hZGVkKCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSB0aGlzLmxpc3RQcm9qZWN0TmFtZXMoKTtcbiAgICBpZiAocHJvamVjdE5hbWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHByb2plY3ROYW1lc1swXTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0luc2lkZSA9IChiYXNlOiBQYXRoLCBwb3RlbnRpYWw6IFBhdGgpOiBib29sZWFuID0+IHtcbiAgICAgIGNvbnN0IGFic29sdXRlQmFzZSA9IHJlc29sdmUodGhpcy5yb290LCBiYXNlKTtcbiAgICAgIGNvbnN0IGFic29sdXRlUG90ZW50aWFsID0gcmVzb2x2ZSh0aGlzLnJvb3QsIHBvdGVudGlhbCk7XG4gICAgICBjb25zdCByZWxhdGl2ZVBvdGVudGlhbCA9IHJlbGF0aXZlKGFic29sdXRlQmFzZSwgYWJzb2x1dGVQb3RlbnRpYWwpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVBvdGVudGlhbC5zdGFydHNXaXRoKCcuLicpICYmICFpc0Fic29sdXRlKHJlbGF0aXZlUG90ZW50aWFsKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMubGlzdFByb2plY3ROYW1lcygpXG4gICAgICAubWFwKG5hbWUgPT4gW3RoaXMuZ2V0UHJvamVjdChuYW1lKS5yb290LCBuYW1lXSBhcyBbUGF0aCwgc3RyaW5nXSlcbiAgICAgIC5maWx0ZXIodHVwbGUgPT4gaXNJbnNpZGUodHVwbGVbMF0sIHBhdGgpKVxuICAgICAgLy8gU29ydCB0dXBsZXMgYnkgZGVwdGgsIHdpdGggdGhlIGRlZXBlciBvbmVzIGZpcnN0LlxuICAgICAgLnNvcnQoKGEsIGIpID0+IGlzSW5zaWRlKGFbMF0sIGJbMF0pID8gMSA6IDApO1xuXG4gICAgaWYgKHByb2plY3RzWzBdKSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNbMF1bMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDbGkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRvb2woJ2NsaScpO1xuICB9XG5cbiAgZ2V0U2NoZW1hdGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0VG9vbCgnc2NoZW1hdGljcycpO1xuICB9XG5cbiAgZ2V0QXJjaGl0ZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRUb29sKCdhcmNoaXRlY3QnKTtcbiAgfVxuXG4gIGdldFByb2plY3RDbGkocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9nZXRQcm9qZWN0VG9vbChwcm9qZWN0TmFtZSwgJ2NsaScpO1xuICB9XG5cbiAgZ2V0UHJvamVjdFNjaGVtYXRpY3MocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9nZXRQcm9qZWN0VG9vbChwcm9qZWN0TmFtZSwgJ3NjaGVtYXRpY3MnKTtcbiAgfVxuXG4gIGdldFByb2plY3RBcmNoaXRlY3QocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9nZXRQcm9qZWN0VG9vbChwcm9qZWN0TmFtZSwgJ2FyY2hpdGVjdCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VG9vbCh0b29sTmFtZTogJ2NsaScgfCAnc2NoZW1hdGljcycgfCAnYXJjaGl0ZWN0Jyk6IFdvcmtzcGFjZVRvb2wge1xuICAgIHRoaXMuX2Fzc2VydExvYWRlZCgpO1xuXG4gICAgY29uc3Qgd29ya3NwYWNlVG9vbCA9IHRoaXMuX3dvcmtzcGFjZVt0b29sTmFtZV07XG5cbiAgICBpZiAoIXdvcmtzcGFjZVRvb2wpIHtcbiAgICAgIHRocm93IG5ldyBXb3Jrc3BhY2VUb29sTm90Rm91bmRFeGNlcHRpb24odG9vbE5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB3b3Jrc3BhY2VUb29sO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvamVjdFRvb2woXG4gICAgcHJvamVjdE5hbWU6IHN0cmluZywgdG9vbE5hbWU6ICdjbGknIHwgJ3NjaGVtYXRpY3MnIHwgJ2FyY2hpdGVjdCcsXG4gICk6IFdvcmtzcGFjZVRvb2wge1xuICAgIHRoaXMuX2Fzc2VydExvYWRlZCgpO1xuXG4gICAgY29uc3Qgd29ya3NwYWNlUHJvamVjdCA9IHRoaXMuX3dvcmtzcGFjZS5wcm9qZWN0c1twcm9qZWN0TmFtZV07XG5cbiAgICBpZiAoIXdvcmtzcGFjZVByb2plY3QpIHtcbiAgICAgIHRocm93IG5ldyBQcm9qZWN0Tm90Rm91bmRFeGNlcHRpb24ocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUb29sID0gd29ya3NwYWNlUHJvamVjdFt0b29sTmFtZV07XG5cbiAgICBpZiAoIXByb2plY3RUb29sKSB7XG4gICAgICB0aHJvdyBuZXcgUHJvamVjdFRvb2xOb3RGb3VuZEV4Y2VwdGlvbih0b29sTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3RUb29sO1xuICB9XG5cbiAgLy8gVE9ETzogYWRkIHRyYW5zZm9ybXMgdG8gcmVzb2x2ZSBwYXRocy5cbiAgdmFsaWRhdGVBZ2FpbnN0U2NoZW1hPFQgPSB7fT4oY29udGVudEpzb246IHt9LCBzY2hlbWFKc29uOiBKc29uT2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgLy8gSlNPTiB2YWxpZGF0aW9uIG1vZGlmaWVzIHRoZSBjb250ZW50LCBzbyB3ZSB2YWxpZGF0ZSBhIGNvcHkgb2YgaXQgaW5zdGVhZC5cbiAgICBjb25zdCBjb250ZW50SnNvbkNvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRlbnRKc29uKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnkuY29tcGlsZShzY2hlbWFKc29uKS5waXBlKFxuICAgICAgY29uY2F0TWFwKHZhbGlkYXRvciA9PiB2YWxpZGF0b3IoY29udGVudEpzb25Db3B5KSksXG4gICAgICBjb25jYXRNYXAodmFsaWRhdG9yUmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHZhbGlkYXRvclJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKGNvbnRlbnRKc29uQ29weSBhcyBUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgc2NoZW1hLlNjaGVtYVZhbGlkYXRpb25FeGNlcHRpb24odmFsaWRhdG9yUmVzdWx0LmVycm9ycykpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZEpzb25GaWxlKHBhdGg6IFBhdGgpOiBPYnNlcnZhYmxlPEpzb25PYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5faG9zdC5yZWFkKG5vcm1hbGl6ZShwYXRoKSkucGlwZShcbiAgICAgIG1hcChidWZmZXIgPT4gdmlydHVhbEZzLmZpbGVCdWZmZXJUb1N0cmluZyhidWZmZXIpKSxcbiAgICAgIG1hcChzdHIgPT4gcGFyc2VKc29uKHN0ciwgSnNvblBhcnNlTW9kZS5Mb29zZSkgYXMge30gYXMgSnNvbk9iamVjdCksXG4gICAgKTtcbiAgfVxufVxuIl19