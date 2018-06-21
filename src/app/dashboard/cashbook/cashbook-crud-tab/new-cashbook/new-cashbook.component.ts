import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-new-cashbook',
  templateUrl: './new-cashbook.component.html',
  styleUrls: ['./new-cashbook.component.css']
})
export class NewCashbookComponent implements OnInit {
  data;

  constructor(public dialogRef: MatDialogRef<NewCashbookComponent>,
    private dialog: MatDialog) {
      this.data = {};
     }

  ngOnInit() {
  }

  save() {
    debugger;
      if (!this.data.cashbookId) {
        this.data.id = UUID.UUID();
        let date = new Date();
        this.data.creationDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
      }
      this.dialogRef.close(this.data);
  }

}
