// Update it as much as you want, just don't change the names

export class BankAccount {
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

export class FedexAccount {
  sendMail(recipient: string): void {
    console.log(`Mail sent to ${recipient} via FedEx.`);
  }

  recieveMail(sender: string): void {
    console.log(`Mail received from ${sender} via FedEx.`);
  }
}

export class KazPostAccount extends BankAccount {
  sendMail(recipient: string): void {
    console.log(`Mail sent to ${recipient} via KazPost.`);
  }

  recieveMail(sender: string): void {
    console.log(`Mail received from ${sender} via KazPost.`);
  }
}

export function withdrawMoney(
  accounts: BankAccount | KazPostAccount,
  amount: number
) {
  for (const account of accounts) {
    account.withdraw(amount);
  }
}

export function sendLetterTo(
  accounts: FedexAccount | KazPostAccount,
  recipient: string
) {
  for (const account of accounts) {
    account.sendMail(recipient);
  }
}
