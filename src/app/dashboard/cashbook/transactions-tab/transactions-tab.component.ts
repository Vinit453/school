import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-tab',
  templateUrl: './transactions-tab.component.html',
  styleUrls: ['./transactions-tab.component.css']
})
export class TransactionsTabComponent implements OnInit {
  transactionReq;

  constructor() { 
    this.transactionReq = {};
  }

  ngOnInit() {
  }

}
