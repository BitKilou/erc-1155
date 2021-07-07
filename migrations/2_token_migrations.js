var NFT = artifacts.require("./NFT.sol");

module.exports = (deployer) => deployer
  .then( () => deployToken(deployer));

  function deployToken(deployer) {
      return deployer.deploy(NFT)
  }
