import { ethers } from "hardhat";
require("dotenv").config();


async function main() {
  //grab the contract factory
  const Synesthesia = await ethers.getContractFactory("Synesthesia");
  console.log('deploying contract...')
  const synesthesia = await Synesthesia.deploy();
  await synesthesia.deployed();
  console.log("Contract deployed to address:", Synesthesia.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
