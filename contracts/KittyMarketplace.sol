pragma solidity ^0.5.12;

import "./Kittycontract.sol";
import "./Ownable";
import "./IKittyMarketplace.sol";

contract KittyMarketplace is Ownable, IKittyMarketplace {
    Kittycontract private _kittyContract;

    struct Offer {
        address payable seler;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] offers;

    mapping(uint256 => Offer) tokenIdToOffer;

    function setKittyContract(address _kittyContractAddress) public onlyOwner{
        _kittyContract = KittyContract(_kittyContractAddress);
    }
        
    function getOffer(uint256 _tokenId) public view returns (address seller, uint256 price, uint256 index, uint256 tokenId, bool active){
        Kitty storage kitty = kitties[_tokenId];

        seller = address msg.sender;
        price = uint256 newPrice;
        index = uint256 index;
        tokenId = uint256 kittyId;
        active = bool active;

        return (msg.sender, newPrice, index, kittyId, active);
    }
}