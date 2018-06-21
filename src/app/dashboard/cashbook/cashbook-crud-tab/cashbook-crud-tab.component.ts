import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from 'src/app/school-management.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewCashbookComponent } from 'src/app/dashboard/cashbook/cashbook-crud-tab/new-cashbook/new-cashbook.component';

@Component({
  selector: 'app-cashbook-crud-tab',
  templateUrl: './cashbook-crud-tab.component.html',
  styleUrls: ['./cashbook-crud-tab.component.css']
})

export class CashbookCrudTabComponent implements OnInit {

  cashbooks = [];

  constructor(
    private schoolService: SchoolManagementService, 
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadCashbooks();
  }

  loadCashbooks(){
    this.schoolService.getcashbooks().subscribe(data=>{
      if(data){
        this.cashbooks = data.Cashbooks;
      }else{
        console.log("No cashbooks found", data); 
      }
    });
  }

  createCashbook(): void {
    let dialogRef = this.dialog.open(NewCashbookComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The create cashbook dialog was closed');
      debugger;

      if (result != undefined) {
          console.log(result);
          this.schoolService.addCashbook(result).subscribe(data => {
            console.log('cashbook added succesfully');
            this.cashbooks.push(result);
          },error=>{
            console.log('failed to add cashbook');
          });
        }
      }
    );
  }
}
