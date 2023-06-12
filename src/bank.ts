import { Customer } from "../src/customer";

export class Bank {
  private customers: Customer[];

  /**
   * Adds a costomer to the banks customer list.
   */
  constructor() {
    this.customers = [];
  }

  /**
   * Adds a costomer to the banks customer list.
   * @param {Customer} customer to be added to the list
   */
  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  /**
   * Transfers the ammount from one account to the other
   * @returns the total of the deposits in the all the accounts
   */
  getTotalBalance() {
    let total = 0;
    for (const customer of this.customers) {
      total += customer.getBalance();
    }
    return total;
  }
}
