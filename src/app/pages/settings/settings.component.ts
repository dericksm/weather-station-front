import { Blockchain } from './../../models/Blockchain';
import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public blockchain: Blockchain

  constructor(private blockchainService: BlockchainService) { 
    this.blockchain = blockchainService.blockchain
  }

  ngOnInit(): void {

  }

}
