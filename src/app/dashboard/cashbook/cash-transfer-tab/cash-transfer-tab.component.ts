import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-cash-transfer-tab',
  templateUrl: './cash-transfer-tab.component.html',
  styleUrls: ['./cash-transfer-tab.component.css']
})
export class CashTransferTabComponent implements OnInit {
  cashTransferReq;
  cbNames;
  nameOfAccounts;
  bankNames;
  subAccounts;

  constructor(private schoolService: SchoolManagementService) {
    this.cashTransferReq = {};
    this.cbNames = [];
    this.nameOfAccounts = [];
    this.bankNames = [{ 'bankName': 'b1' }, {'bankName':'b2'}];
    this.subAccounts = [{'subAccount':'sa2'}, {'subAccount':'sa2'}];
   }

  ngOnInit() {
    this.schoolService.getcashbookNames().subscribe(data => {
      if (data) {
        this.cbNames = data.CashbookNames;
        
      } else {
        console.log("No cashbooks found", data);
      }
    });

    this.schoolService.getNameOfAccounts().subscribe(data => {
      if (data) {
        this.nameOfAccounts = data.NameOfAccounts;
        
      } else {
        console.log("No Name Of Accounts found", data);
      }
    });

    this.schoolService.getSubAccounts().subscribe(data => {
      if (data) {
        //todo this.subAccounts = data.SubAccounts;
        
      } else {
        console.log("No Sub Accounts found", data);
      }
    });

    this.schoolService.getBankNames().subscribe(data => {
      if (data) {
       //todo  this.bankNames = data.BankNames;
      
      } else {
        console.log("No Sub Accounts found", data);
      }
    });
  }

  save(){
    console.log(this.cashTransferReq);
  }
}
