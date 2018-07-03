import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';
import { MatDialog } from '@angular/material';
import { SansthaFormComponent } from '../sanstha-form/sanstha-form.component';

@Component({
  selector: 'app-sanstha-list',
  templateUrl: './sanstha-list.component.html',
  styleUrls: ['./sanstha-list.component.css']
})
export class SansthaListComponent implements OnInit {

  data;
  constructor(private service: SchoolManagementService,  private dialog: MatDialog) {
    this.getAll();
   }

  ngOnInit() {
  }

  create(){
    debugger;
    let dialogRef = this.dialog.open(SansthaFormComponent, {
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
    let dialogRef = this.dialog.open(SansthaFormComponent, {
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
      this.data = this.service.deletesanstha(data.id);
      this.getAll();
    }
  }

  getAll(){
    this.service.getsanstha().subscribe((result)=>{
      this.data = result.Sansthas;
    });
  }

}
