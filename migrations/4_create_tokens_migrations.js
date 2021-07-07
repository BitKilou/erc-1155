var NFT = artifacts.require("./NFT.sol");
var MarketPlace = artifacts.require("./MarketPlace.sol");

module.exports = (deployer, network, [owner]) => deployer
  .then( () => createToken1())
  .then( () => createToken2())
  .then( () => createToken3())
  .then( () => mintTokens());

  //Nous devons mettre l'uri ici également

  async function createToken1() {
      (await NFT.deployed()).create(0, "");
  }

  async function createToken2() {
    (await NFT.deployed())._mint(0, "");
}

async function createToken3() {
    (await NFT.deployed())._mint(0, "");
}

function mintTokens() {
    NFT.deployed().then(instance => {
        instance.mint(1, [MarketPlace.address], [10]);
        instance.mint(2, [MarketPlace.address], [20]);
        instance.mint(1, [MarketPlace.address], [2]);
    })
}