import { Injectable } from '@angular/core';
import { school } from '../../classes';


@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  allRole: school.role[]

  constructor() { }

  getRole () {
    return this.allRole;
  }

  setRole(roles){
    this.allRole = roles;
  }

  getbyId(id): school.role{
    var x: school.role;
    this.allRole.forEach(role => {
      if(role.id == id){
        x=role;
      }
    });
    return x;
  }

}
