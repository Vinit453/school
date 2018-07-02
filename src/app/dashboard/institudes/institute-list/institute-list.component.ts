import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css']
})
export class InstituteListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getinstitudes().subscribe((result)=>{
      this.data = result.Institudes;
    });
   }

  ngOnInit() {
  }

}
