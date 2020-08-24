pragma solidity 0.5.12;

import "./IERC721.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 20;
    string public constant name = "DigiCats"; //created token name
    string public constant symbol = "DGC"; //created token symbol

    //we have some events that we need to emit & can be used for the website
    event Birth(address owner, uint256 kittenId, uint256 momId, uint256 dadId, uint256 genes);

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

    uint256 public gen0Counter; //keep track of gen0 cats

    function createKittyGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require(gen0Counter < CREATION_LIMIT_GEN0); //require limited number of gen0 cats -- must have constant

        gen0Counter++; //add to the counter

        //actual creation of the kitty, passing 0 momid, 0 dadId, 0 gen, then genes from input and owner
        return _createKitty(0, 0, 0, _genes, msg.sender);
        //for the owner, it can also go to "address(this)" --> basically the contract itself,
        //then cats can be sold, auctioned off, etc.
    }

    //internal function to create kitty that takes arguments
    function _createKitty(
        uint256 _momId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) { //returns cat ID - needs to be "internal"
        //to create new kitty, we specify struct parameters by using the name of the struct
        Kitty memory _kitty = Kitty({
            genes: _genes,
            birthTime: uint64(now), //unix timestamp in seconds
            momId: uint32(_momId), //convert uint256 to uint32 - easier to input256 and convert
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        //this creates new cat and places it in array, then assigns ID that takes it down to zero
        uint256 newKittenId = kitties.push(_kitty) - 1;  

        emit Birth(_owner, newKittenId, _momId, _dadId, _genes);

        //to create new cat it needs to be sent from zero address, then onto the owner and needs to get cat ID
        _transfer(address(0), _owner, newKittenId);

        return newKittenId;
    }

    function getKitty(uint256 _id) external view returns(
        uint256 genes, 
        uint256 birthTime, 
        uint256 momId, 
        uint256 dadId, 
        uint256 generation){
        
        Kitty storage kitty = kitties[_id]; //this gives us ability to point to mapping and not make a copy of it

        birthTime = uint256(kitty.birthTime);
        momId = uint256(kitty.momId);
        dadId = uint256(kitty.dadId);
        generation = uint256(kitty.generation);
        genes = kitty.genes;

        //another way to do this function is under returns to just specify: uint256 without specific names,
        //then use return(birthTime, momId, dadId...)
    }

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
        require(_owns(msg.sender, tokenId)); //calls "_own" function --> see below
      
        _transfer(msg.sender, to, tokenId); //executes the transfer function
    }

    function _transfer(address from, address to, uint256 tokenId) internal{
        ownershipTokenCount[to]++; //increasing token count to recipient
        kittyIndexToOwner[tokenId] = to; //connect new owner with kitty ID

        //this makes sure that if it's not a brand new kitty, it's taken out of the senders address
        if(msg.sender != address(0)){
            ownershipTokenCount[from]--;
        }

         emit Transfer(from, to, tokenId); //emit the event that transfer took place
    }

    //function that ensures that person transfering the kitty actually owns it
    function _owns(address seller, uint tokenId) internal view returns (bool){
        return kittyIndexToOwner[tokenId] == seller;
    }
}