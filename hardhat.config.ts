import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import accounts from './testAccount'

require("dotenv").config();

const {API_URL, PRIVATE_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: `wss://polygon-mumbai.g.alchemy.com/v2/${API_URL}`,
      accounts: [`0x${accounts[0].privateKey}, 0x${accounts[1].privateKey}`]
    }
  }
}

export default config;
