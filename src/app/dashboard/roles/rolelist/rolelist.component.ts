import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';
import { school } from '../../../classes';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { RoleServiceService } from '../role-service.service';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {

  constructor(private router: Router, private schoolservice: SchoolManagementService, private toast: ToastrService, private roleService: RoleServiceService) { }
  role: school.role;

  ngOnInit() {
    this.getRole();
  }

  showforEdit(rol: school.role) {
    this.schoolservice.selectedrole = Object.assign({}, rol);
  }

  getRole() {
    this.schoolservice.getRole().subscribe(data => {
      this.role = data.Roles;
      this.roleService.setRole(this.role);
    })
  }

  onDelete(id: number) {
    if (confirm('Are you want to delete record') == true) {
      this.schoolservice.deleterole(id).subscribe(
        data => {
          this.schoolservice.getRole();
          this.getRole();
          this.toast.warning("Record Delete Sucessfully");
        }
      )
    }
  }

}
