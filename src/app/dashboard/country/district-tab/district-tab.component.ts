import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-district-tab',
  templateUrl: './district-tab.component.html',
  styleUrls: ['./district-tab.component.css']
})
export class DistrictTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getdistricts().subscribe((result) => {
      this.data = result.Districts;
    });
  }

  ngOnInit() {
  }

}
