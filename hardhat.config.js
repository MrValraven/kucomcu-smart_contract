require("@nomiclabs/hardhat-waffle");

const METAMASK_CONFIG_PRIVATE_KEY = "0x";

module.exports = {
  solidity: "0.8.0",
  network: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/hNepa2j77Jz3oGcERNSduGgNXlr2RM9C",
      accounts: [METAMASK_CONFIG_PRIVATE_KEY],
    },
  },
};
