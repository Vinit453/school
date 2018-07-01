import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-collection',
  templateUrl: './fee-collection.component.html',
  styleUrls: ['./fee-collection.component.css']
})
export class FeeCollectionComponent implements OnInit {

  feesModules;
  constructor() {
    this.feesModules = [{
      name:'Installment Type',
      fields:[],
      api:''
    },
    {
      name:'Fee Type',
      fields:[],
      api:''
    },
    {
      name:'Fee Description',
      fields:[],
      api:''
    },{
      name:'Select Fee',
      fields:[],
      api:''
    },
    {
      name:'Set Fee Student Wise',
      fields:[],
      api:''
    }
  ];

  }

  ngOnInit() {
  }

  openModal(module){
    //open  module
  }

}
