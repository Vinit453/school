import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-caste-tab',
  templateUrl: './caste-tab.component.html',
  styleUrls: ['./caste-tab.component.css']
})
export class CasteTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getCast().subscribe((result) => {
      this.data = result.Castes;
    });
  }

  ngOnInit() {
  }

}
