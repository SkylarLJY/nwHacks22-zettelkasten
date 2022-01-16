// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs=  require("fs")
async function main() {
  const NotePlayground = await hre.ethers.getContractFactory("NotePlayground");
  const notePlayground = await NotePlayground.deploy();
  await notePlayground.deployed();

  console.log("NotePlayground deployed to:", notePlayground.address);
  let config = `export const noteplayground = '${notePlayground.address}'`;
  let data = JSON.stringify(config)
  fs.writeFileSync('src/config.js', JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
