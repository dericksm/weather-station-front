import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'wh-list',
  templateUrl: './wh-list.component.html',
  styleUrls: ['./wh-list.component.scss']
})
export class WhListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  openModal(){
    $("#modalWSDetails").modal('show')
  }



}
