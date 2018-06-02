import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SchoolManagementService } from '../../../school-management.service';
import { school } from '../../../classes';
import { PermissionServiceService } from '../permission-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-permission-new',
  templateUrl: './permission-new.component.html',
  styleUrls: ['./permission-new.component.css']
})
export class PermissionNewComponent implements OnInit {
  id: string;

  constructor(private schoolService: SchoolManagementService, private activateRoutes: ActivatedRoute, private permissionService: PermissionServiceService, private toast: ToastrService, private route: Router) { }
  role: school.role;
  ngOnInit() {

        this.schoolService.getRole().subscribe(data => {
          this.role = data.Roles;
          console.log("Role List", this.role);          
        })

        //this.resetForm();
        this.activateRoutes.params.subscribe(params => {
          this.id = params['id'];
          console.log("Role id " + this.id);
          this.schoolService.selectedpermission = this.permissionService.getbyId(this.id);
        })
        if (!this.schoolService.selectedpermission) {
          this.schoolService.selectedpermission = {
            id: null,
            name: '',
            roleId: null
          }
        }
  }

  onSubmit(form) {
    if (form.id == null) {
      debugger;
      this.schoolService.addpermission(form).subscribe(
        data => {
          this.schoolService.getpermission();
          // this.tostr.success('New Record Added Sucessfully', 'Department Added');
          this.toast.success('New Record Added Sucessfully');
          this.route.navigate(['/dashboard/permission']);
        })
    }
    else {
      this.schoolService.patchpermissions(form.id, form).subscribe(
        data => {
          this.schoolService.getpermission();
          this.toast.info('Record Update Sucessfully');
          this.route.navigate(['/dashboard/permission']);
        }
      )
    }
  }
}