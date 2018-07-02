import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getschools().subscribe((result)=>{
      this.data = result.Schools;
    });
   }

  ngOnInit() {
  }

}
