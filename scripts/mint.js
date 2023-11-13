const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const network = "https://rpc.goerli.eth.gateway.fm";

  const provider = new ethers.providers.JsonRpcProvider(network);

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const FMContarct = await ethers.getContractFactory("FordMustang", signer);

  const contract = await FMContarct.attach(process.env.CONTARCT_ADD);

  await contract.safeMint();

  console.log("minted");

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });