import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from 'src/app/school-management.service';

declare var jsPDF: any;

@Component({
  selector: 'app-cashbook-report-tab',
  templateUrl: './cashbook-report-tab.component.html',
  styleUrls: ['./cashbook-report-tab.component.css']
})
export class CashbookReportTabComponent implements OnInit {

  cashbookReportReq;
  cbNames;
  cbBankNames;
  reportType;

  constructor(private schoolService: SchoolManagementService) { 
    this.cashbookReportReq = {};
    this.cbNames = [];
    this.cbBankNames = [];

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
        this.cbBankNames = data.CashbookBankNames;
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

    if (reportType !== 'option4'){
      fromDate.setDate(toDate.getDate() - factor);
      this.cashbookReportReq.fromDate = fromDate;
      this.cashbookReportReq.toDate = toDate;
    }

    this.schoolService.getCashbookReport(this.cashbookReportReq).subscribe(data => {
      if (data) {
        console.log(data);
        console.log(data.Cashbooks);
        this.generatePDF(data.Cashbooks);
        console.log("bye");
      } else {
        console.log("No cashbooks found", data);
      }
    });
  }

  private generatePDF(inputData) {
    var columns = ["ID", "Name", "Bank Name", "Account Type", "Creation Date" ];
    var rows = [];

    for(let cashbookEntry of inputData ) {
      rows.push([cashbookEntry.id, cashbookEntry.name, cashbookEntry.bankName, cashbookEntry.accountType, cashbookEntry.creationDate])
    }  
    
    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, rows, {
      theme: 'grid',
      addPageContent: function (data) {
        doc.text("Cashbook Report", 40, 30);
      }
    });
    doc.save('cashbook_report_'+new Date().getTime().toString()+'.pdf');
  }

}