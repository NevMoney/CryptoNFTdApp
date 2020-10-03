const Kittycontract = artifacts.require("Kittycontract");
const KittyMarketplace = artifacts.require("KittyMarketplace");

module.exports = function(deployer) {
    deployer.deploy(KittyMarketplace, Kittycontract.address);
}