# Moving NFTs using FxPortal 

## Description

This guide provides a detailed walkthrough for transferring NFTs from the Goerli network to the Polygon network via the FxPortal.

### Prerequisites

- Make sure you have Node.js and npm installed on your machine.
- You must have some goreli Ethereum in wallet.

### Executing Program

Follow the steps below to move the NFTs from goreli to Mumbai network:

1. Deploy the FordMustang contract to the Goerli network using this command:
   &emsp;`npx hardhat run scripts/deploy.js --network goerli`

2. Rename `.env.example` to `.env` and note the NFT contract address and add it to your `.env` file and add your private key.
3. Mint Ford Mustang 1969 NFTs on the Goerli network using this command:
   &emsp;`npx hardhat run scripts/mint.js --network goerli`
5. Approve the deposit of NFTs on the Goerli network using this command:
   &emsp;`npx hardhat run scripts/approveDeposit.js --network goerli`
6. Modify the wallet address and contract address in this `getBalance.js` script.
7. Check the NFT balance on the Polygon network using this command:
   &emsp;`npx hardhat run scripts/getBalance.js --network mumbai`
I haven't showed in video explanation of deposit transaction in mumbai explorer so here is the link of screenshot https://ibb.co/hDDSCc3. 

## Authors

- Neel Bareja