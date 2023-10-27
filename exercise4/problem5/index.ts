class BankAccount {
  #balance: number;

  constructor() {
    this.#balance = 0;
  }

  withdraw(amount: number): number {
    if (amount > this.#balance) {
      return -1;
    }

    this.#balance -= amount;
    return this.#balance;
  }

  deposit(amount: number): number {
    if (amount > 1_000_000) {
      return -1;
    }

    this.#balance += amount;
    return this.#balance;
  }
}

const account = new BankAccount();

console.log(account.withdraw(100)); // -1
console.log(account.deposit(100)); // 100
console.log(account.withdraw(10)); // 90
console.log(account.deposit(10_000_000)); // -1
console.log(account.withdraw(10)); // 80

export default BankAccount;
