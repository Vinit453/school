import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchoolManagementService } from '../../../school-management.service';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-sanstha-form',
  templateUrl: './sanstha-form.component.html',
  styleUrls: ['./sanstha-form.component.css']
})
export class SansthaFormComponent implements OnInit {

  data;
  constructor(public dialogRef: MatDialogRef<SansthaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public menuData: any, private service: SchoolManagementService) { 
      this.data = menuData;
    }

  ngOnInit() {
  }

  save(){
    if(this.data.id){
      this.service.patchsanstha(this.data.id, this.data).subscribe((result)=>{
        this.dialogRef.close(result); 
      });
    }else{
      this.service.addsanstha(this.data).subscribe((result)=>{
        this.dialogRef.close(result);
      });
    }
  }

  reset(){
    this.data = {}; 
  }

  onCloseCancel(){
    this.dialogRef.close('cancel');
  }
}
