require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/hNepa2j77Jz3oGcERNSduGgNXlr2RM9C",
      accounts: [process.env.DEPLOYMENT_WALLET_KEY],
    },
  },
};
