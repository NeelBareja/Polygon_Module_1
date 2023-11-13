const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const FMContract = await ethers.getContractFactory("FordMustang");

  const NFTdeploy = await FMContract.deploy();

  await NFTdeploy.deployed();

  console.log("NFT deployed to Address: ", NFTdeploy.address);
  fs.writeFileSync("data/C_Addr.js", `export const C_Addr = "${NFTdeploy.address}";`)

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
