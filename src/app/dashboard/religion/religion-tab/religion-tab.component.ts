import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-religion-tab',
  templateUrl: './religion-tab.component.html',
  styleUrls: ['./religion-tab.component.css']
})
export class ReligionTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getreligions().subscribe((result) => {
      this.data = result.Religions;
    });
  }

  ngOnInit() {
  }

}
