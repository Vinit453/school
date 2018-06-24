import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from 'src/app/school-management.service';

@Component({
  selector: 'app-cashbook-report-tab',
  templateUrl: './cashbook-report-tab.component.html',
  styleUrls: ['./cashbook-report-tab.component.css']
})
export class CashbookReportTabComponent implements OnInit {

  cashbookReportReq = {};
  cbNames = [];
  bankNames = [];

  constructor(private schoolService: SchoolManagementService) { 
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

    this.schoolService.getcashbookBanknames().subscribe(data => {
      if (data) {
        this.bankNames = data.CashbookBankNames;
      } else {
        console.log("No cashbooks found", data);
      }
    });
  }

  getCashbookReport(){
    this.schoolService.getCashbookReport(this.cashbookReportReq).subscribe(data => {
      if (data) {
        console.log(data);
      } else {
        console.log("No cashbooks found", data);
      }
    });
  }

}
