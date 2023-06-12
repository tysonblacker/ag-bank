# Basic Bank

## Requirements

- As a Customer I can join the bank by provide a name and an initial deposit.
- The bank should maintain a balance for multiple customers and allow them to deposit,
  withdraw and check their current balances.
- As a bank manager you should also be able to see the total balance of the bank
- Ensure that a customer cannot withdraw more money than they have in their account; and
- Allow Customers to transfer money to another customer

## Assumptions

- Currency is acceptable to 2 decimal places. It is assumed to be for Austalian currency and only requires 2 decimal places.
- Names are ok to be duplicates, an account id is not needed

## Classes

### Customer

- Holds the customer details, Name and Balance for the sole account.
- Updates the balance of the accounts with the following actions
  - Withdraws
  - Deposits
  - Transfers

### Bank

- Holds list of customer and calculates the total of the the deposits for each of the customers.

## Future Changes

- Seperate the account class from the customer, have an account class if the more than one account is required for each customer.

## Folders

- ./src for the project source
- ./test for jest testing

## Package updates

Changes to `tsconfig.json` and `package.json` are listed below.

### tsconfig.json

Updates `tsconfig.json` listed

```JavaScript
"include": ["./src/**/*"],
"exclude": ["./node_modules"],
"compilerOptions": {
  ...
  "rootDir": "./src",
  ...
  "outDir": "./out",
  ...
}
```

### package.json

We have to add some settings to `package.json`.

```JavaScript
  ...
  "scripts": {
    "build": "tsc",
    "test": "jest"
  },
  ...
```

## Testing

Run following commands to run the tests.

```Bash

npm install -D typescript
npm install -D ts-node
npm install -D jest ts-jest @types/jest
npm run build
npm test
```
