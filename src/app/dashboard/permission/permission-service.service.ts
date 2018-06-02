import { Injectable } from '@angular/core';
import { school } from '../../classes';

@Injectable({
  providedIn: 'root'
})
export class PermissionServiceService {

  allPermission: school.permission[]
  constructor() { }

  getPermission(){
    return this.allPermission;
  }

  setPermission(permissions){
    return this.allPermission;
  }

  getbyId(id): school.permission{
    var x: school.permission;
    this.allPermission.forEach(permissions => {
      if(permissions.id == id){
        x=permissions;
      }
    });
    return x;
  }


}
