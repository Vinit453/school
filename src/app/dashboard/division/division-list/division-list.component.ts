import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.css']
})
export class DivisionListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getdivisions().subscribe((result)=>{
      this.data = result.Divisions;
    });
   }

   get
   
  ngOnInit() {
  }

}
