import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';
import { school } from '../../../classes';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { PermissionServiceService } from '../permission-service.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})

export class PermissionListComponent implements OnInit {



  constructor(private router: Router, private schoolservice: SchoolManagementService, private toast: ToastrService, private permissionService: PermissionServiceService) { }
  permission: school.permission;
  role: school.role;


  ngOnInit() {
    this.getPermission();
  }

  showforEdit(permision: school.permission) {
    this.schoolservice
  }

  getPermission(){
    this.schoolservice.getpermission().subscribe(data => {
      this.permission = data.Permissions;
      this.permissionService.setPermission(this.permission);
      console.log("Permission List", this.permission);
      
    })
  }

  onDelete(id: number) {
    if (confirm('Are you want to delete record')==true) {
      this.schoolservice.deletepermission(id).subscribe( data => {
        this.schoolservice.getpermission();
        this.getPermission();
        this.toast.warning("Warning Delete Sucessfully");
      })
    }
  }



}
