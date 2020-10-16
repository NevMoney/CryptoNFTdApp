// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";

/* This is the file where we configure how the app interacts with truffle.
What I've done is created a localhost network for development, then we have
linked the local host to the Rinkeby network to launch it onto the space
(test net).
For the providerFactory network we created private key to the ETH account
utilizing MetaMask and the Infura Key. Because these are highly sensitive
items and this particular file is public, the private key and infura key
are saved into the environment file which is not published, thus creating
a layer of security (yes, even for the test net).

*/


const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const providerFactory = network =>
  new HDWalletProvider(
    process.env.PRIVATE_KEY,
    `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`);

module.exports = {

  networks: {
    
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "5777",       // Any network (default: none)
    },

    rinkeby: {
      provider: () => providerFactory("rinkeby"),
      network_id: 4,
      gas: 6900000,
      gasPrice: 20e9 // 20 Gwei
    }

  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.12",
     
    }
  }
}
