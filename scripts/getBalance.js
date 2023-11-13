const hre = require("hardhat");
const C_JSON = require("../artifacts/contracts/FordMustang.sol/FordMustang.json");

const C_Addr = "0xAf341AD1fd553AE087F1d3FF68756eFc42e8648b";
const C_ABI = C_JSON.abi;
const W_Addr = "0xbEEfDF9cC92C9F6b2DA3911D7Ab6670A92D20d31";

async function main() {

  const contract = await hre.ethers.getContractAt(C_ABI, C_Addr);

  console.log(`you have: ${await contract.balanceOf(W_Addr)} NFTs`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});