import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';
import { MatDialog } from '@angular/material';
import { SectionFormComponent } from '../section-form/section-form.component';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService,  private dialog: MatDialog) {
    this.getAll();
   }

  ngOnInit() {
  }

  create(){
    debugger;
    let dialogRef = this.dialog.open(SectionFormComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAll();
    });
  }

  update(data){
    debugger;
    let dialogRef = this.dialog.open(SectionFormComponent, {
      width: '600px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAll();
    });
  }

  delete(data){
    if (confirm('Are you want to delete this record') == true) {
      this.service.deletesections(data.id).subscribe((result)=>{
        this.getAll();
      });
    }
  }

  getAll(){
    this.service.getsections().subscribe((result)=>{
      this.data = result.Sections;
    });
  }


}
