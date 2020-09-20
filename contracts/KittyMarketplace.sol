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

    constructor(address _kittyContractAddress) public {
        setKittyContract(_kittyContractAddress);
    }
        
    function getOffer(uint256 _tokenId) public view returns (address seller, uint256 price, uint256 index, uint256 tokenId, bool active){
        Offer storage offer = tokenIdToOffer[_tokenId];//get the tokenId from the mapping

        return (offer.seller, offer.price, offer.index, offer.tokenId, offer.active);//return details for that offer
    }

    function getAllTokenOnSale() internal view  returns(uint256[] memory listOfOffers){
        uint256 forSaleList = offers.length;//this gives us the length of the offers array

        if(forSaleLIst == 0) {
            return uint256[];
        }
        else{
            for(i = 0; i < offers.length; i++);
            return uint256[i];
        }
    }

    function setOffer(uint256 _price, uint256 _tokenId) public onlyOwner{
        require(_tokenId < 1, "You cannot sell the same cat more than once!");
        require(KittyMarketplace == operator);

        _price = uint256 newOffer;
        _tokenId = uint256 tokenId;

        emit MarketTransaction("Offer created", msg.sender, tokenId);
    }

    function removeOffer(uint256 _tokenId) public onlyOwner{
        uint256 _tokenId = tokenIdToOffer{offers].tokenId;
        delete tokenIdToOffer[_tokenId];

        emit MarketTransaction("Offer removed", msg.sender, tokenId);
    }

    function buyKitty(uint256 _tokenId) public payable{
        require(msg.value == _price);
        require(_tokenId == tokenIdToOffer[offers].tokenId);

        transferFrom(_from, _to, _tokenId);

        emit MarketTransaction("Kitty purchased", msg.sender, tokenId);
    }
}