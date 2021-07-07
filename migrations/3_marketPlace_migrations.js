var NFT = artifacts.require("./NFT.sol");
var MarketPlace = artifacts.require("./MarketPlace.sol");

module.exports = (deployer) => deployer
  .then( () => deployMarketPlace(deployer));

  function deployMarketPlace(deployer) {
      return deployer.deploy(MarketPlace, NFT.address);
  }