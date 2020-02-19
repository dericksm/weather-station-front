import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { Block } from '../../models/Block';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {

  public blocks: Block[] = []
  constructor(
    private blockchainService: BlockchainService) {
      this.blocks = blockchainService.getBlocks()
  }

  ngOnInit(): void {

  }

}
