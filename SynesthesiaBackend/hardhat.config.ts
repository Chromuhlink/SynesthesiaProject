import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const config: HardhatUserConfig = {
  solidity: "0.8.18",
}
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [ PRIVATE_KEY ],
    },
  
},
etherscan: {
  apiKey: {
    goerli: 'GSITIPUN6YWCKF7BMZ3K5JMP26JFDSW53V'
  }}
};

export default config
