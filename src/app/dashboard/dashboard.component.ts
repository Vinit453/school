import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolManagementService } from '../school-management.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  permission;
  user;


  constructor(private route: Router) { }

  ngOnInit() {
    // console.log("Permission On Dashboard", localStorage.getItem('dashboard'));   
    this.permission = JSON.parse(localStorage.getItem('dashboard'));
    console.log("Permission Log", this.permission[0]);
    this.user =  localStorage.getItem('user');
  }

  navigate(permission){
    debugger;
    this.route.navigate(['/dashboard/', permission.Permission ]);
  }

  logout(){
    
  }

}
