import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-subcaste-tab',
  templateUrl: './subcaste-tab.component.html',
  styleUrls: ['./subcaste-tab.component.css']
})
export class SubcasteTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getsubcastes().subscribe((result) => {
      this.data = result.Subcastes;
    });
  }

  ngOnInit() {
  }

}
