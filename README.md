# WOOP Chain Contract Deploy and Verify

## How to configue `harhat.config.js`

`
module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.17",
      settings: {
        viaIR: true,
        optimizer: { enabled: true },
      },
    }]
  },
  networks: {
    woopchain: {
      url: process.env.WOOPCHAIN_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      woopchain: "abc"
    },
    customChains: [
      {
        network: "woopchain",
        chainId: 139,
        urls: {
          apiURL: "https://explorer.wikiwoop.com/api",
          browserURL: "https://explorer.wikiwoop.com"
        }
      }
    ]
  }
};

`
