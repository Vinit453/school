import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../school-management.service';

@Component({
  selector: 'app-opening-balance-tab',
  templateUrl: './opening-balance-tab.component.html',
  styleUrls: ['./opening-balance-tab.component.css']
})
export class OpeningBalanceTabComponent implements OnInit {

  bankNames;
  nameOfAccounts;
  cbNames;
  openingBalanceReq;

  constructor(private schoolService: SchoolManagementService) { 
    this.openingBalanceReq = {};
    this.cbNames = [];
    this.nameOfAccounts = [];
    this.bankNames = [{ 'bankName': 'b1' }, { 'bankName': 'b2' }];
  }

  ngOnInit() {
    this.schoolService.getcashbookNames().subscribe(data => {
      if (data) {
        this.cbNames = data.CashbookNames;

      } else {
        console.log("No cashbooks found", data);
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
    console.log(this.openingBalanceReq);
  }
}
