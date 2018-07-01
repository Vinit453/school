import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UUID } from 'angular2-uuid';
import { SchoolManagementService } from '../../../../school-management.service';
import { DEFAULT_RESIZE_TIME } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-new-cashbook',
  templateUrl: './new-cashbook.component.html',
  styleUrls: ['./new-cashbook.component.css']
})
export class NewCashbookComponent implements OnInit {
  data;
  entryType;
  cbNames;
  cashbookReq;
  legderReq;
  nameOfAccounts;
  nameOfAccReq;

  constructor(public dialogRef: MatDialogRef<NewCashbookComponent>,
    private dialog: MatDialog,
    private schoolService: SchoolManagementService) {
      this.cbNames = [];
      this.nameOfAccounts = [];
      this.cashbookReq = {};
      this.legderReq = {};
      this.nameOfAccReq = {};
     }

  ngOnInit() {
    this.schoolService.getcashbookNames().subscribe(data => {
      if (data) {
        this.cbNames = data.CashbookNames;
        console.log(this.cbNames);
      } else {
        console.log("No cashbooks found", data);
      }
    });

    this.schoolService.getNameOfAccounts().subscribe(data => {
      if (data) {
        this.nameOfAccounts = data.NameOfAccounts;
        console.log(this.nameOfAccounts);
      } else {
        console.log("No Name Of Accounts found", data);
      }
    });
    
  }

  save() {
    let date = new Date();
    let cDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    if (this.entryType == 'Cashbook'){
      this.cashbookReq.creationDate = cDate;
      this.cashbookReq.entryType = this.entryType;
      this.dialogRef.close(this.cashbookReq);
    } else if (this.entryType == 'Ledger') {
      this.legderReq.creationDate = cDate;
      this.legderReq.entryType = this.entryType;
      this.dialogRef.close(this.legderReq);
    } else if (this.entryType == 'NameOfAcc') {
      this.nameOfAccReq.creationDate = cDate;
      this.nameOfAccReq.entryType = this.entryType;
      this.dialogRef.close(this.nameOfAccReq);
    }
  }
}
