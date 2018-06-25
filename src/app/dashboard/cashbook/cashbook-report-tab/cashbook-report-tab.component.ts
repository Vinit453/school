import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from 'src/app/school-management.service';

@Component({
  selector: 'app-cashbook-report-tab',
  templateUrl: './cashbook-report-tab.component.html',
  styleUrls: ['./cashbook-report-tab.component.css']
})
export class CashbookReportTabComponent implements OnInit {

  cashbookReportReq ;
  cbNames = [];
  bankNames = [];

  constructor(private schoolService: SchoolManagementService) { 
    this.cashbookReportReq = {};
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

  getCashbookReport(reportType){
    
    let toDate = new Date();
    let fromDate = new Date();
    let factor;
    if (reportType === 'monthReport'){
      factor = 30;
    } else if (reportType === 'quatorReport') {
      factor = 90;
    }
    else if(reportType === 'yearReport'){
      factor = 365;
    }

    fromDate.setDate(toDate.getDate() - factor);
    this.cashbookReportReq.fromDate = fromDate;
    this.cashbookReportReq.toDate = toDate;

    this.schoolService.getCashbookReport(this.cashbookReportReq).subscribe(data => {
      if (data) {
        console.log(data);
        this.generatePDF(data);
      } else {
        console.log("No cashbooks found", data);
      }
    });
  }

  private generatePDF(input) {
    throw new Error("Method not implemented."); 
  }

}
