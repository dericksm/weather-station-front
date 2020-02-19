import { Injectable } from '@angular/core';
import { Blockchain } from '../models/Blockchain';
import EC from "elliptic"

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchain:Blockchain = new Blockchain();
  public walletKeys = []

  constructor() {
    this.blockchain.difficulty = 1
    this.blockchain.minePendingTransaction('my-wallet-address')

    this.generateWalletKeys()
  }

  generateWalletKeys(){
    const ec = new EC.ec('secp256k1')
    const key = ec.genKeyPair()
    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    })
  }

  getBlocks(){
    return this.blockchain.chain
  }
}
