import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UUID } from 'uuid';

@Component({
  selector: 'app-new-cashbook',
  templateUrl: './new-cashbook.component.html',
  styleUrls: ['./new-cashbook.component.css']
})
export class NewCashbookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewCashbookComponent>,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  save() {
  }
}
