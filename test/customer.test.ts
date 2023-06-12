import { Customer } from "../src/customer";

describe("Customer", () => {
  let customer1: Customer;
  let customer2: Customer;

  beforeEach(() => {
    customer1 = new Customer("Theane Thousand", 1000);
    customer2 = new Customer("Freddy Five Hundred", 500);
  });

  it("should allow customers to deposit", () => {
    customer1.deposit(500);
    expect(customer1.getBalance()).toBe(1500);
  });

  it("should allow customers to withdraw", () => {
    customer1.withdraw(500);
    expect(customer1.getBalance()).toBe(500);
  });

  it("should not allow customers to withdraw more than their balance", () => {
    expect(() => customer1.withdraw(1500)).toThrow("Insufficient funds");
  });

  it("should allow customers to transfer money to another customer", () => {
    customer1.transfer(customer2, 500);
    expect(customer1.getBalance()).toBe(500);
    expect(customer2.getBalance()).toBe(1000);
  });

  it("should not allow customers to transfer more than their balance", () => {
    expect(() => customer1.transfer(customer2, 1500)).toThrow(
      "Insufficient funds"
    );
  });

  it("should maintain balance for multiple customers", () => {
    expect(customer1.getBalance()).toBe(1000);
    expect(customer2.getBalance()).toBe(500);
  });

  it("should not allow initialisation of a negative balance", () => {
    const defaultBalanceCustomer = new Customer("David Defaulter");
    expect(defaultBalanceCustomer.getBalance()).toBe(0);
  });

  it("should only allow integer amounts", () => {
    expect(() => customer1.deposit(50.555)).toThrow(
      "Transfer amount must have a maximum of 2 decimal places!"
    );
    expect(() => customer1.withdraw(50.555)).toThrow(
      "Transfer amount must have a maximum of 2 decimal places!"
    );
    expect(() => {
      new Customer("Desmond Decimal", 10.555);
    }).toThrow("Transfer amount must have a maximum of 2 decimal places!");
    expect(() => customer1.transfer(customer2, 50.555)).toThrow(
      "Transfer amount must have a maximum of 2 decimal places!"
    );
  });

  it("should not allow initialisation of a negative balance", () => {
    expect(() => {
      new Customer("Negative Nelly", -1000);
    }).toThrow("Initial deposit must be greater than or equal to 0!");
  });

  it("should not allow tranfer of negative values", () => {
    expect(() => customer1.deposit(-100)).toThrow(
      "Deposit amount must be greater than 0!"
    );
  });

  it("should not allow withdraw of negative values", () => {
    expect(() => customer1.withdraw(-100)).toThrow(
      "Withdrawal amount must be greater than 0!"
    );
  });

  it("should not allow tranfer of negative values", () => {
    expect(() => customer1.transfer(customer2, -100)).toThrow(
      "Transfer amount must be greater than 0!"
    );
  });
});
