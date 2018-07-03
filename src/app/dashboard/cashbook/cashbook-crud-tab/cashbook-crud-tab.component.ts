import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from 'src/app/school-management.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewCashbookComponent } from './new-cashbook/new-cashbook.component';

@Component({
  selector: 'app-cashbook-crud-tab',
  templateUrl: './cashbook-crud-tab.component.html',
  styleUrls: ['./cashbook-crud-tab.component.css']
})

export class CashbookCrudTabComponent implements OnInit {

  cashbooks = [];
  ledgers = [];
  nameOfAccounts = [];

  constructor(
    private schoolService: SchoolManagementService, 
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadCashbooks();
    this.loadLedgers();
    this.loadNameOfAccounts();
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

  loadLedgers() {
    this.schoolService.getLedgers().subscribe(data => {
      if (data) {
        this.ledgers = data.Ledgers;
      } else {
        console.log("No ledgers found", data);
      }
    });
  }

  loadNameOfAccounts() {
    this.schoolService.getNameOfAccounts().subscribe(data => {
      if (data) {
        this.nameOfAccounts = data.NameOfAccounts;
      } else {
        console.log("No name of accounts found", data);
      }
    });
  }

  create(): void {
    let dialogRef = this.dialog.open(NewCashbookComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The create cashbook dialog was closed');
      debugger;

      if (result != undefined) {
        if (result.entryType == 'Cashbook'){
           this.schoolService.addCashbook(result).subscribe(data => {
             console.log('cashbook added succesfully');
             this.cashbooks.push(result);
           }, error => {
             console.log('failed to add cashbook');
           });
        } else if (result.entryType == 'Ledger'){
          this.schoolService.addLedger(result).subscribe(data => {
            console.log('Ledger added succesfully');
            this.ledgers.push(result);
          }, error => {
            console.log('failed to add ledger');
          });
         }
        else if (result.entryType == 'NameOfAcc') {
          this.schoolService.addNameOfAccounts(result).subscribe(data => {
            console.log('NameOfAcc added succesfully');
            this.nameOfAccounts.push(result);
          }, error => {
            console.log('failed to add NameOfAcc');
          });
        }
        }
      }
    );
  }

  createLedger(): void {
    let dialogRef = this.dialog.open(NewCashbookComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The create cashbook dialog was closed');
      debugger;

      if (result != undefined) {
        console.log(result);
        this.schoolService.addCashbook(result).subscribe(data => {
          console.log('ledger added succesfully');
          this.cashbooks.push(result);
        }, error => {
          console.log('failed to add cashbook');
        });
      }
    }
    );
  }
}
