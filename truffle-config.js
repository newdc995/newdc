const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const developmentMnemonic ="08c65ea2d69a38ba2b86d68b7fe6748c1685e64ecc0ca172e07c133d40ccdbf8";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      //contracts_build_directory: path.join(__dirname, "client/src/contracts"),
      provider: () => new HDWalletProvider(developmentMnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      //contracts_build_directory: path.join(__dirname, "client/src/contracts"),
      provider: () => new HDWalletProvider(developmentMnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.5.10", // A version or constraint - Ex. "^0.5.0"
    }
  }
}

