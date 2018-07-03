import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-country-tab',
  templateUrl: './country-tab.component.html',
  styleUrls: ['./country-tab.component.css']
})
export class CountryTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getcountry().subscribe((result) => {
      this.data = result.Countrys;
    });
  }

  ngOnInit() {
  }

}
