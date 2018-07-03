import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-state-tab',
  templateUrl: './state-tab.component.html',
  styleUrls: ['./state-tab.component.css']
})
export class StateTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getstates().subscribe((result) => {
      this.data = result.States;
    });
  }

  ngOnInit() {
  }

}
