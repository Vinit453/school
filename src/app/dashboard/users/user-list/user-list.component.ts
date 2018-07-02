import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getusers().subscribe((result)=>{
      this.data = result.users;
    });
   }

  ngOnInit() {
  }

}
