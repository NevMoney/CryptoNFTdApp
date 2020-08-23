pragma solidity 0.5.12;

import "./IERC721.sol";

contract Kittycontract is IERC721 {

    string public constant name = "DigiCats"; //created token name
    string public constant symbol = "DGC"; //created token symbol

    //creating a kitty struct - items that kitty has
    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 momId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] kitties; //store kitty inside an array called kitties, ID is position in array

    mapping(uint256 => address) public kittyIndexToOwner; //tying the cat ID and ties it to the owner
    mapping(address => uint256) private ownershipTokenCount; //takes the address and gives us the number of cats owned

    //we have some events that we need to emit
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    //this function gives us how many kitties particular address owns
    function balanceOf(address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

    //returns the length of kitties array
    function totalSupply() public view returns (uint){
        return kitties.length;
    }

    //returns address that owns the particular cat ID
    function ownerOf(uint256 tokenId) external view returns (address){
        return kittyIndexToOwner[tokenId];
    }

    //transfer the kitty to another person
    function transfer(address to, uint256 tokenId) external{
        require(to != address (0)); //cannot be sent to 0 address
        require(to != address (this)); //cannot be sent to contract address
        require(owns(msg.sender, tokenId)); //calls "own" function --> see below
      
        transferKitty(msg.sender, to, tokenId); //executes the transfer function
    }

    function transferKitty(address from, address to, uint256 tokenId) internal{
        ownershipTokenCount[to]++; //increasing token count to recipient
        kittyIndexToOwner[tokenId] = to; //connect new owner with kitty ID

        //this makes sure that if it's not a brand new kitty, it's taken out of the senders address
        if(msg.sender != address(0)){
            ownershipTokenCount[from]--;
        }

         emit Transfer(from, to, tokenId); //emit the event that transfer took place
    }

    //function that ensures that person transfering the kitty actually owns it
    function owns(address seller, uint tokenId) internal view returns (bool){
        return kittyIndexToOwner[tokenId] == seller;
    }
}