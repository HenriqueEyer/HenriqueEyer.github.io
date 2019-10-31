const assert = require('assert')

class BankAccount {
  constructor(identifier, balance) {
    this.identifier = identifier
    if (balance > 0) {
      this.balance = balance
    } else {
      this.balance = 0
    }
  }

  deposit(amount) {
    this.balance = this.balance + amount
    return this.balance
  }

  withdrawal(amount) {
    this.balance = this.balance - amount
    return this.balance
  }
}

// escreva aqui o seu código
class BankTransaction{
    static transfer(contWithdrawal,contDeposit,value){
        contWithdrawal.withdrawal(value);
        contDeposit.deposit(value);
    }
}


let account1 = new BankAccount(1, 300)
let account2 = new BankAccount(2, 500)

assert.equal(typeof BankAccount.prototype, "object")
assert.ok(account1 instanceof BankAccount)
assert.equal(typeof BankAccount.prototype, "object")
assert.ok(account2 instanceof BankAccount)

BankTransaction.transfer(account1, account2, 100)
assert.equal(account1.balance, 200)
assert.equal(account2.balance, 600)


// Crie a classe com o nome BankTransaction.
//  Crie o método estático chamado transfer que receba 3 parametros: 
//  1) um objeto da classe BankAccount que terá o dinheiro retirado da conta; 
//  2) um objeto da classe BankAccount que terá o dinheiro depositado na conta;
//  3) um valor inteiro referente ao valor da transferência bancária: