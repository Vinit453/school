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
  private APIuri = 'http://159.65.89.101:3000/api/';
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

    //--------------------------------------- 
  //Acadmic Year
  getacadmicyear() {
    return this.http.get(this.APIuri + 'academicYears').map(res => res.json());
  }

  addacadmicyear(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'academicYears', body, requestOptions).map(x => x.json());
  }

  patchacadmicyear(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'academicYears/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteacadmicyear(id) {  
    return this.http.delete(this.APIuri + 'academicYears/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //Admission
  getAdmissionList() {
    return this.http.get(this.APIuri + 'admissions').map(res => res.json());
  }

  addAdmissionList(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'admissions', body, requestOptions).map(x => x.json());
  }

  patchAdmissionList(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'admissions/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteAdmissionList(id) {  
    return this.http.delete(this.APIuri + 'admissions/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //Admission Type
  getAdmissionType() {
    return this.http.get(this.APIuri + 'admissionTypes').map(res => res.json());
  }

  addAdmissionType(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'admissionTypes', body, requestOptions).map(x => x.json());
  }

  patchAdmissionType(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'admissionTypes/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteAdmissionType(id) {  
    return this.http.delete(this.APIuri + 'admissionTypes/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //castes
  getCast() {
    return this.http.get(this.APIuri + 'castes').map(res => res.json());
  }

  addCast(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'castes', body, requestOptions).map(x => x.json());
  }

  patchCast(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'castes/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteCast(id) {  
    return this.http.delete(this.APIuri + 'castes/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //Category
  getcategories() {
    return this.http.get(this.APIuri + 'categories').map(res => res.json());
  }

  addcategories(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'categories', body, requestOptions).map(x => x.json());
  }

  patchcategories(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'categories/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletecategories(id) {  
    return this.http.delete(this.APIuri + 'categories/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //country
  getcountry() {
    return this.http.get(this.APIuri + 'country').map(res => res.json());
  }

  addcountry(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'country', body, requestOptions).map(x => x.json());
  }

  patchcountry(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'country/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletecountry(id) {  
    return this.http.delete(this.APIuri + 'country/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //District
  getdistricts() {
    return this.http.get(this.APIuri + 'districts').map(res => res.json());
  }

  adddistricts(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'districts', body, requestOptions).map(x => x.json());
  }

  patchdistricts(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'districts/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletedistricts(id) {  
    return this.http.delete(this.APIuri + 'districts/ID' + id).map(res => res.json());
  }

    //--------------------------------------- 
  //Divisions
  getdivisions() {
    return this.http.get(this.APIuri + 'divisions').map(res => res.json());
  }

  adddivisions(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'divisions', body, requestOptions).map(x => x.json());
  }

  patchdivisions(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'divisions/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletedivisions(id) {  
    return this.http.delete(this.APIuri + 'divisions/ID' + id).map(res => res.json());
  }

  //--------------------------------------- 
  //Institudes
  getinstitudes() {
    return this.http.get(this.APIuri + 'institudes').map(res => res.json());
  }

  addinstitudes(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'institudes', body, requestOptions).map(x => x.json());
  }

  patchinstitudes(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'institudes/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteinstitudes(id) {  
    return this.http.delete(this.APIuri + 'institudes/ID' + id).map(res => res.json());
  }

 //occupations
  getoccupations() {
    return this.http.get(this.APIuri + 'occupations').map(res => res.json());
  }

  addoccupations(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'occupations', body, requestOptions).map(x => x.json());
  }

  patchoccupations(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'occupations/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteoccupations(id) {  
    return this.http.delete(this.APIuri + 'occupations/ID' + id).map(res => res.json());
  }

   //religions
   getreligions() {
    return this.http.get(this.APIuri + 'religions').map(res => res.json());
  }

  addreligions(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'religions', body, requestOptions).map(x => x.json());
  }

  patchreligions(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'religions/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletereligions(id) {  
    return this.http.delete(this.APIuri + 'religions/ID' + id).map(res => res.json());
  }

   //sanstha
   getsanstha() {
    return this.http.get(this.APIuri + 'sanstha').map(res => res.json());
  }

  addsanstha(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'sanstha', body, requestOptions).map(x => x.json());
  }

  patchsanstha(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'sanstha/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletesanstha(id) {  
    return this.http.delete(this.APIuri + 'sanstha/ID' + id).map(res => res.json());
  }

  //schools
  getschools() {
    return this.http.get(this.APIuri + 'schools').map(res => res.json());
  }

  addschools(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'schools', body, requestOptions).map(x => x.json());
  }

  patchschools(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'schools/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteschools(id) {  
    return this.http.delete(this.APIuri + 'schools/ID' + id).map(res => res.json());
  }

  //schoolCastes
  getschoolCastes() {
    return this.http.get(this.APIuri + 'schoolCastes').map(res => res.json());
  }

  addschoolCastes(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'schoolCastes', body, requestOptions).map(x => x.json());
  }

  patchschoolCastes(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'schoolCastes/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteschoolCastes(id) {  
    return this.http.delete(this.APIuri + 'schoolCastes/ID' + id).map(res => res.json());
  }

  //schoolCategories
  getschoolCategories() {
    return this.http.get(this.APIuri + 'schoolCategories').map(res => res.json());
  }

  addschoolCategories(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'schoolCategories', body, requestOptions).map(x => x.json());
  }

  patchschoolCategories(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'schoolCategories/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteschoolCategories(id) {  
    return this.http.delete(this.APIuri + 'schoolCategories/ID' + id).map(res => res.json());
  }

  //schoolReligions
  getschoolReligions() {
    return this.http.get(this.APIuri + 'schoolReligions').map(res => res.json());
  }

  addschoolReligions(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'schoolReligions', body, requestOptions).map(x => x.json());
  }

  patchschoolReligions(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'schoolReligions/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteschoolReligions(id) {  
    return this.http.delete(this.APIuri + 'schoolReligions/ID' + id).map(res => res.json());
  }

  //schoolSections
  getschoolSections() {
    return this.http.get(this.APIuri + 'schoolSections').map(res => res.json());
  }

  addschoolSections(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'schoolSections', body, requestOptions).map(x => x.json());
  }

  patchschoolSections(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'schoolSections/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteschoolSections(id) {  
    return this.http.delete(this.APIuri + 'schoolSections/ID' + id).map(res => res.json());
  }

  //schoolSubcastes
  getschoolSubcastes() {
    return this.http.get(this.APIuri + 'schoolSubcastes').map(res => res.json());
  }

  addschoolSubcastes(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'schoolSubcastes', body, requestOptions).map(x => x.json());
  }

  patchschoolSubcastes(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'schoolSubcastes/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteschoolSubcastes(id) {  
    return this.http.delete(this.APIuri + 'schoolSubcastes/ID' + id).map(res => res.json());
  }

  //class
  getclass() {
    return this.http.get(this.APIuri + 'class').map(res => res.json());
  }

  addclass(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'class', body, requestOptions).map(x => x.json());
  }

  patchclass(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'class/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteclass(id) {  
    return this.http.delete(this.APIuri + 'class/ID' + id).map(res => res.json());
  }

  //sections
  getsections() {
    return this.http.get(this.APIuri + 'sections').map(res => res.json());
  }

  addsections(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'sections', body, requestOptions).map(x => x.json());
  }

  patchsections(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'sections/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletesections(id) {  
    return this.http.delete(this.APIuri + 'sections/ID' + id).map(res => res.json());
  }

  //states
  getstates() {
    return this.http.get(this.APIuri + 'states').map(res => res.json());
  }

  addstates(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'states', body, requestOptions).map(x => x.json());
  }

  patchstates(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'states/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletestates(id) {  
    return this.http.delete(this.APIuri + 'states/ID' + id).map(res => res.json());
  }

  //subcastes
  getsubcastes() {
    return this.http.get(this.APIuri + 'subcastes').map(res => res.json());
  }

  addsubcastes(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'subcastes', body, requestOptions).map(x => x.json());
  }

  patchsubcastes(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'subcastes/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletesubcastes(id) {  
    return this.http.delete(this.APIuri + 'subcastes/ID' + id).map(res => res.json());
  }


  //talukas
  gettalukas() {
    return this.http.get(this.APIuri + 'talukas').map(res => res.json());
  }

  addtalukas(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'talukas', body, requestOptions).map(x => x.json());
  }

  patchtalukas(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'talukas/ID' + id, body, requestOptions).map(res => res.json());
  }

  deletetalukas(id) {  
    return this.http.delete(this.APIuri + 'talukas/ID' + id).map(res => res.json());
  }

  //users
  getusers() {
    return this.http.get(this.APIuri + 'users').map(res => res.json());
  }

  addusers(permission: school.role) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'users', body, requestOptions).map(x => x.json());
  }

  patchusers(id, permission) {
    var body = JSON.stringify(permission);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers: headerOptions });
    return this.http.patch(this.APIuri + 'users/ID' + id, body, requestOptions).map(res => res.json());
  }

  deleteusers(id) {  
    return this.http.delete(this.APIuri + 'users/ID' + id).map(res => res.json());
  }

  getUserById(id) {
    return this.http.get(this.APIuri+'users/Id' + id).map(res => res.json());
  }

  //cashbook
  getcashbooks() {
    return this.http.get(this.APIuri + 'cashbooks').map(res => res.json());
  }

  getcashbookNames() {
    return this.http.get(this.APIuri + 'cashbooks/name').map(res => res.json());
  }

  getcashbookBanknames() {
    return this.http.get(this.APIuri + 'cashbooks/bankname').map(res => res.json());
  }
  
  addCashbook(cashbook){
    var body = JSON.stringify(cashbook);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'cashbooks', body, requestOptions).map(res => res.json());
  }

    getCashbookReport(cashbookReportReq){
    var body = JSON.stringify(cashbookReportReq);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIuri + 'cashbooks/report', body, requestOptions).map(res => res.json());
  }

}
