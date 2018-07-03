import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  
  data;
  constructor(public dialogRef: MatDialogRef<SectionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public menuData: any, private service: SchoolManagementService) { 
      this.data = menuData;
    }

  ngOnInit() {
  }

  save(){
    if(this.data.id){
      this.service.patchsections(this.data.id, this.data).subscribe((result)=>{
        this.dialogRef.close(result); 
      });
    }else{
      this.service.addsections(this.data).subscribe((result)=>{
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
