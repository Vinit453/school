import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getsections().subscribe((result)=>{
      this.data = result.Sections;
    });
   }
  ngOnInit() {
  }

}
