var Instablock = artifacts.require("../contracts/Instablock.sol");

module.exports = function(deployer) {
  deployer.deploy(Instablock);
};