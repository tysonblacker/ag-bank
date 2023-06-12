import { Bank } from "../src/bank";
import { Customer } from "../src/customer";

describe("Bank", () => {
  let bank: Bank;
  let customer1: Customer;
  let customer2: Customer;

  beforeEach(() => {
    bank = new Bank();
    customer1 = new Customer("Theo Thousand", 1000);
    customer2 = new Customer("Phil Five Hundred", 500);
    bank.addCustomer(customer1);
    bank.addCustomer(customer2);
  });

  it("should calculate the total balance of the bank", () => {
    expect(bank.getTotalBalance()).toBe(1000 + 500);
  });
});
