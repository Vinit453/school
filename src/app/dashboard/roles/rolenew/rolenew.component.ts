import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SchoolManagementService } from '../../../school-management.service';
import { school } from '../../../classes';
import { RoleServiceService } from '../role-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rolenew',
  templateUrl: './rolenew.component.html',
  styleUrls: ['./rolenew.component.css']
})
export class RolenewComponent implements OnInit {

  id: string;

  constructor(public schoolService: SchoolManagementService, private activateRoutes: ActivatedRoute, private roleService: RoleServiceService, private toast: ToastrService, private route: Router) { }

  ngOnInit() {
    //this.resetForm();
    this.activateRoutes.params.subscribe(params => {
      this.id = params['id'];
      console.log("Role id " + this.id);
      this.schoolService.selectedrole = this.roleService.getbyId(this.id);
    })
    if (!this.schoolService.selectedrole) {
      this.schoolService.selectedrole = {
        id: null,
        type_name: ''
      }
    }
  }

  onSubmit(form) {
    if (form.id == null) {
      debugger;
      this.schoolService.addrole(form).subscribe(
        data => {
          this.schoolService.getRole();
          // this.tostr.success('New Record Added Sucessfully', 'Department Added');
          this.toast.success('New Record Added Sucessfully');
          this.route.navigate(['/dashboard/roles']);
        })
    }
    else {
      this.schoolService.patchrole(form.id, form).subscribe(
        data => {
          this.schoolService.getRole();
          this.toast.info('Record Update Sucessfully');
          this.route.navigate(['/dashboard/roles']);
        }
      )
    }
  }

  resetForm(role){

  }

  cancelForm(role){

  }

  
}
