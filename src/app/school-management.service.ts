import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Headers, Http, HttpModule, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { school } from './classes';

@Injectable({
  providedIn: 'root'
})
export class SchoolManagementService {
  //Custom Varialble
  selectedrole: school.role;  
  selectedpermission: school.permission;
  private APIuri = 'http://localhost:3000/api/';
  constructor(private http: Http) { }
  
  //-----------------------------------
  //Login
  login(login_username: string, login_password: string){
    var headers = [];
    debugger;
    headers.push('content-Type', 'application/json');
    return this.http.post(this.APIuri+ 'signIn', { "login_user_name": login_username, "login_password": login_password },
    {headers: headers[0]}).map(res => res.json());
  }

  //--------------------------------------
  //Get user
    //Get All Department
    getUser() {
      return this.http.get(this.APIuri + 'users').map(res => res.json());
    }

   //--------------------------------------- 
  //Role
  getRole() {
    return this.http.get(this.APIuri + 'roles').map(res => res.json());
  }

  addrole(role: school.role) {
    var body = JSON.stringify(role);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'roles', body, requestOptions).map(x => x.json());
  }

  patchrole(id, role) {
    var body = JSON.stringify(role);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'roles/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleterole(id) {  
    return this.http.delete(this.APIuri + 'departments/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //Permission
  getpermission() {
    return this.http.get(this.APIuri + 'permissions').map(res => res.json());
  }

  addpermission(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'permissions', body, requestOptions).map(x => x.json());
  }

  patchpermissions(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'permissions/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletepermission(id) {  
    return this.http.delete(this.APIuri + 'permissions/ID' + id).map(res => res.json());
  }



}
