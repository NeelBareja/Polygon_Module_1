const hre = require("hardhat");
const { ethers } = hre;
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
require("dotenv").config();

async function main() {
  const network = "https://rpc.goerli.eth.gateway.fm";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(network);
  const wallet = new ethers.Wallet(privateKey, provider);
  const [signer] = await ethers.getSigners();

  const FMContarct = await ethers.getContractFactory("FordMustang");
  const FM = await FMContarct.attach("0x823C5497F4C3505812Ef4FeF0534DD77520C49b4");

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);


  for (let i = 0; i < 5; i++) {

    const apprTransaction = await FM.connect(signer).approve(fxRootAddress, i);
    await apprTransaction.wait();
    console.log(`no.${i} nft approved`);
  }

  for (let i = 0; i < 5; i++) {
    const gasPrice = ethers.utils.parseUnits("50", "gwei");
    const depTransaction = await fxRoot.connect(signer).deposit(process.env.CONTARCT_ADD, wallet.address, i, "0x6770", { gasPrice });

    await depTransaction.wait();
    console.log(`NFT with ID ${i} Deposited`);
  }

  console.log("Approved and Deposited all NFTs");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });