import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-taluka-tab',
  templateUrl: './taluka-tab.component.html',
  styleUrls: ['./taluka-tab.component.css']
})
export class TalukaTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.gettalukas().subscribe((result) => {
      this.data = result.Talukas;
    });
  }

  ngOnInit() {
  }

}
