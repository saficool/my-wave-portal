require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Contract deployed at : 0x647d799B819f5494AF29B90D9ceeb80180c6642F

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const SECRET_KEY = process.env.SECRET_KEY;

task("accounts", "prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [SECRET_KEY],
      chainId: 5
    }
  }
};
