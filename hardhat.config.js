require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: [process.env.HOSTING_URL],
      accounts: [process.env.DEPLOYMENT_WALLET_KEY],
    },
  },
};
