require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString()
const testnetUrl = fs.readFileSync(".testnet").toString()
const mainnetUrl = fs.readFileSync(".mainnet").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: testnetUrl,
      accounts: [privateKey]
    },
    mainnet: {
      url: mainnetUrl,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};