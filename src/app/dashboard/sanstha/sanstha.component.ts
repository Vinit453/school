import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanstha',
  templateUrl: './sanstha.component.html',
  styleUrls: ['./sanstha.component.css']
})
export class SansthaComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['/dashboard/Sanstha/sansthas']);
   }

  ngOnInit() {
  }

}
