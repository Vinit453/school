import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.css']
})
export class CategoryTabComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getcategories().subscribe((result) => {
      this.data = result.Categories;
    });
  }

  ngOnInit() {
  }

}
