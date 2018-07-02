import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../school-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getusers().subscribe((result)=>{
      this.data = result.users;
    });
   }

  ngOnInit() {
  }

}
