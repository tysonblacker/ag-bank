export class Customer {
  private name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number = 0) {
    this.name = name;
    this.checkAmount(initialDeposit);
    if (initialDeposit < 0) {
      throw new Error("Initial deposit must be greater than or equal to 0!");
    }
    this.balance = initialDeposit;
  }

  /**
   * Throw an exception if the ammount has more the 2 decimal places.
   * @param {number} amount the number the account will be changed by
   * @throws exception if the amount has a higher resolution that two decimal places.
   */
  checkAmount(amount: number) {
    if (!Number.isInteger(amount * 100)) {
      throw new Error(
        "Transfer amount must have a maximum of 2 decimal places!"
      );
    }
  }

  /**
   * Adds the amount to the deposit
   * @param {number} amount for the change to be added
   * @throws exception if there is the amount is a non positive integer
   */
  deposit(amount: number) {
    let errorMsg;

    this.checkAmount(amount);
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than 0!");
    }
    this.balance += amount;
  }

  /**
   * Reduces the balance of the account by the amount
   * @param {number} amount the amount to reduce the account balance by
   * @throws exception if there is the amount is a non positive integer
   */
  withdraw(amount: number) {
    this.checkAmount(amount);
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than 0!");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds!");
    }
    this.balance -= amount;
  }

  /**
   * Returns the balance amount
   * @returns balance
   */
  getBalance() {
    return this.balance;
  }

  /**
   * Transfers the ammount from one account to the other
   * @param {Customer} recipient the reciever of the account transfer
   * @param {number} amount the amount to be transferred to the recipent acct
   * @throws exception if there is the amount is a non positive integer
   */
  transfer(recipient: Customer, amount: number) {
    this.checkAmount(amount);
    if (amount <= 0) {
      throw new Error("Transfer amount must be greater than 0!");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds!");
    }
    this.balance -= amount;
    recipient.deposit(amount);
  }
}
