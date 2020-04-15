import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import * as _ from 'lodash';


declare var $: any;

@Component({
  selector: 'wh-details',
  templateUrl: './wh-details.component.html',
  styleUrls: ['./wh-details.component.scss']
})
export class WhDetailsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  public pages = [1, 2, 3, 4, 5]
  public totalPages: number = 15
  public currentPage: number = 1


  constructor() {
  }

  changePage(page: number) {
    this.currentPage = page
    this.updatePages()
  }

  navigatePages(value: number) {
    this.currentPage += value
    this.updatePages()
  }

  updatePages() {
    if (this.pages[this.pages.length-1] < this.currentPage + 2) {
      if (this.currentPage + 5 > this.totalPages) {        
        this.pages = _.range(this.totalPages-5, this.totalPages, 1)
      } else {
        this.pages = _.range(this.currentPage, this.currentPage + 5, 1)
      }
    } else {
      if(this.currentPage == this.totalPages) {        
        this.pages = _.range(this.totalPages-5, this.totalPages, 1)
      } else if(this.currentPage == 1) {        
        this.pages = _.range(1, 5, 1)
      } else if(this.currentPage + 2 > this.pages[this.pages.length-1]) {      
        this.pages = _.range(this.totalPages-5, this.totalPages, 1)
      }
    }
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      paging: false,
      scrollY: '300',
      searching: false,
      responsive: true,
      pageLength: 10,
      processing: true,
      info: false,
      language: {
        emptyTable: "Nenhum registro encontrado",
        info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando 0 até 0 de 0 registros",
        infoFiltered: "(Filtrados de _MAX_ registros)",
        infoPostFix: "",
        lengthMenu: "_MENU_ resultados por página",
        loadingRecords: "Carregando...",
        processing: "Processando...",
        zeroRecords: "Nenhum registro encontrado",
        search: "Pesquisar",
        paginate: {
          next: "Próximo",
          previous: "Anterior",
          first: "Primeiro",
          last: "Último"
        },
      }
    }

  }
}
