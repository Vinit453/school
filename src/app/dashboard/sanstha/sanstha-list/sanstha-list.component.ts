import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-sanstha-list',
  templateUrl: './sanstha-list.component.html',
  styleUrls: ['./sanstha-list.component.css']
})
export class SansthaListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService) {
    service.getsanstha().subscribe((result)=>{
      this.data = result.Sansthas;
    });
   }

  ngOnInit() {
  }

}
