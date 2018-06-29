import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { SchoolManagementService } from '../school-management.service';
import { school } from '../classes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users;

  constructor(private router: Router, private schoolService: SchoolManagementService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  user: school.Login;
  name: string;
  login_password: string;
  login_user_name: string;

  dologin(): void {
    debugger;
    this.schoolService.login( this.login_user_name, this.login_password).subscribe(data => {
      console.log("Loggin Details", data);
      if(data){
        this.user = data;
        const dashboard = JSON.stringify(this.user);
        localStorage.setItem('dashboard', dashboard);
        this.router.navigate(['/dashboard']);
        this.toastr.success("Login Sucessfully");        
      }else{
        console.log("Invalid Credentials", data);      
        this.toastr.warning("Invlid Credential")  
      }
    })
  }
}
