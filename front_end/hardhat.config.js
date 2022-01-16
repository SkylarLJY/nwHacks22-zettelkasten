require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const fs = require('fs')
 const keyData = fs.readFileSync('./p-key.txt', {
   encoding: 'utf8', flag:'r'
 })
 const projectId = 'e398d302dbb741238eba9fa73c5b9f05'

 module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [keyData]
    },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${projectId}`,
    //   acocunts: [keyData]
    // }
  },
};