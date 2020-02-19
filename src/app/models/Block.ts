import { Transaction } from './Transaction';
import SHA256 from "crypto-js/sha256"

export class Block {

    public timestamp: number
    public transactions: Transaction[] = []
    public previousHash: any
    public hash: string
    public nonce: number = 0

    constructor(timestamp: number, transactions: any, previousHash: any) {
        this.timestamp = timestamp
        this.transactions = transactions
        this.previousHash = previousHash
        this.hash = this.calculateHash()
        this.nonce = 0
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString()
    }

    mineBlock(difficulty: any) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log("Block mined: " + this.hash)
    }

    hasValidTransactions(){
        for(const tx of this.transactions) {
            if(tx.isValid()) {
                return false
            }
        }
        return true
    }
}