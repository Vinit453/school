import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashbook-crud-tab',
  templateUrl: './cashbook-crud-tab.component.html',
  styleUrls: ['./cashbook-crud-tab.component.css']
})
export class CashbookCrudTabComponent implements OnInit {

  cashbooks = [
    {
      "cashbook_id": 1,
      "cashbook_name": "test1",
      "bank_name": "bank1",
      "account_type": "SAVING",
      "cashbook_created_date": "2018-04-02T18:30:00.000Z"
    },
    {
      "cashbook_id": 2,
      "cashbook_name": "test2",
      "bank_name": "bank1",
      "account_type": "CURRENT",
      "cashbook_created_date": "2018-05-02T18:30:00.000Z"
    },
    {
      "cashbook_id": 3,
      "cashbook_name": "test3",
      "bank_name": "bank2",
      "account_type": "SAVING",
      "cashbook_created_date": "2018-10-02T18:30:00.000Z"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
