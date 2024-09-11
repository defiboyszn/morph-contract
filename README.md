# Simple Storage Smart Contract

This smart contract allows users to store numbers on-chain and retrieve them whenever needed.

## Contract Functionality

- **Store a Number**: Users can store any number on-chain by calling the `store()` function.
- **Retrieve a Number**: The stored number can be retrieved at any time by calling the `retrieve()` function.

## Deployed Contract

- **Contract Address**: `0x599d52A441Eef87f99241396ee14E4C9fFA78281`

## How to Interact

1. **Store a Number**: Call the `store(uint256 _number)` function, passing the number you'd like to store.
2. **Retrieve the Stored Number**: Call the `retrieve()` function to get the last stored number.

## Prerequisites

- You'll need access to an Ethereum wallet (e.g., MetaMask) and an Ethereum-compatible network to interact with the contract.
- Familiarity with Solidity and smart contract interaction tools like Remix, Viem is recommended.

## License

This project is licensed under the MIT License.
