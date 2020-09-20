pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 20;
    string public constant name = "DigiCats"; //created token name
    string public constant symbol = "DGC"; //created token symbol

    bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;

    bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;


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
    mapping(uint256 => address) public kittyIndexToApproved; //mapping from kitty index to an address (need this for exchange listing & transfer token)
    //take address of owner and address of operator who gets permission and it will give us T/F (double mapping)
    mapping(address => mapping (address => bool)) private _operatorApprovals;

    uint256 public gen0Counter; //keep track of gen0 cats

    constructor() public {
        _createKitty(0, 0, 0, uint256(-1), address(0));
    }

    function supportsInterface(bytes4 _interfaceId) external view returns (bool) {
        return(_interfaceId == _INTERFACE_ID_ERC721 || _interfaceId == _INTERFACE_ID_ERC165);
    }

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

    function getKittyByOwner(address _owner) external view returns(uint[] memory){
        uint[] memory result = new uint[](ownershipTokenCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < kitties.length; i++) {
            if (kittyIndexToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }

    function getKitty(uint256 _id) public view returns(
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
            delete kittyIndexToApproved[tokenId];
        }

         emit Transfer(from, to, tokenId); //emit the event that transfer took place
    }

    //function that ensures that person transfering the kitty actually owns it
    function _owns(address seller, uint tokenId) internal view returns (bool){
        return kittyIndexToOwner[tokenId] == seller;
    }

    function approve(address _to, uint256 _tokenId) public{
        require(_owns(msg.sender, _tokenId)); //require ownership

        _approve(_tokenId, _to);
        emit Approval(msg.sender, _to, _tokenId);
    }

    function setApprovalForAll(address operator, bool approved) public{
        require(operator != msg.sender);
       
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function getApproved(uint256 tokenId) public view returns (address){
        require(tokenId < kitties.length); //verify ID exists
        
        return kittyIndexToApproved[tokenId];
    }

    function isApprovedForAll(address _owner, address _operator) public view returns (bool){
        return _operatorApprovals[owner][_operator]; //checks mapping for owner and approved operators
    }

    function _approve(uint256 _tokenId, address _approved) internal {
        kittyIndexToApproved[_tokenId] = _approved;
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public{
        //ensure sender is an owner, authorized sender for the specific token or operator
        require(msg.sender == _from || _approvedFor(msg.sender, _tokenId) || isApprovedForAll(_from, msg.sender)); 
        require(_to != address(0)); //ensure you are not sending to zero address/burning it
        require(_tokenId < kitties.length); //ensure ID is valid
        require(_owns(_from, _tokenId)); //ensure sender is the owner

        _transfer(_from, _to, _tokenId);
    }

    function _approvedFor(address _claimant, uint256 _tokenId) internal view returns(bool){ //need this function to make transferFrom function work
        return kittyIndexToApproved[_tokenId] == _claimant;
    }

    function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal {
        _transfer(_from, _to, _tokenId);
        require(_checkERC721Support(_from, _to, _tokenId, _data));
    }

    function _checkERC721Support(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns(bool){
        if(!_isContract(_to)){
            return true;
        }
        //call onERC721Received in the _to contract (ensuring if it's smart contract it can handle ERC721)
        bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
        return returnData == MAGIC_ERC721_RECEIVED;
    }

    function _isContract(address _to) view internal returns (bool){
        uint32 size;
        assembly{
            size := extcodesize(_to)
        }
        return size > 0;
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) public{
        require(msg.sender == _from || _approvedFor(msg.sender, _tokenId) || isApprovedForAll(_from, msg.sender)); 
        require(_to != address(0)); 
        require(_tokenId < kitties.length);
        require(_owns(_from, _tokenId)); 
        
        _safeTransfer(_from, _to, _tokenId, _data);
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public{
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    function breed(uint256 _dadId, uint256 _momId) public returns (uint256){
        //check ownership
        require(_owns(msg.sender, _dadId), "Hmm, something went wrong! You don't seem to own this kitty");
        require(_owns(msg.sender, _momId), "Hmm, something went wrong! You don't seem to own this kitty");
        
        //get cat info using getKitty function:
        (uint256 dadDna,,,,uint256 dadGeneration) = getKitty(_dadId);
        (uint256 momDna,,,,uint256 momGeneration) = getKitty(_momId);
        uint256 newDna = _mixDna(dadDna, momDna);

        //figure out generation - how to calculate new gen (add mom gen + dad gen)
        uint256 kidGen = 0;
        if (dadGeneration < momGeneration){
            kidGen = momGeneration + 1;
            kidGen = (kidGen/2) + 1;
        }
        else if (dadGeneration > momGeneration){
            kidGen = dadGeneration + 1;
            kidGen = (kidGen/2) + 1;
        }
        else{
            kidGen = momGeneration + 1;
        }

        //create new cat with new properties and give it to msg.sender
        _createKitty(_momId, _dadId, kidGen, newDna, msg.sender);
    }

    function _mixDna(uint256 _dadDna, uint256 _momDna) internal view returns (uint256){
        /*
        this was an old and very simplistic way to get randomness, but it's not random enough
        //take two DNA strings and take first half of 16 digits from dad and second from mom
        uint256 dadsHalf = _dadDna / 100000000;
        uint256 momsHalf = _momDna % 100000000;
        //then add dad dna to mom dna to create kid dna
        uint256 kidDna = (dadsHalf * 100000000) + momsHalf;
        return kidDna;
        */

        //new way to add more randomness to the new gen of kitties
        uint256[8] memory geneArray;
        //create pseudo random number - can't be used for betting, etc but works here
        //for real random numbers in solidity we would use oracles
        uint8 random = uint8(now % 255); 
        /*
        this would give us number from 0-255 or in binary: 00000000-11111111
        now we need a loop to check the numbers 8 times and need a bitwise operator
        bitwise operator & will give us a new binary as it compares two numbers while going through the loop
        binary representation of 1 is 00000001. When multiplied by 2 it becomes 00000010, 4 becomes 00000100, etc.
        00000001
        00000010
        00000100
        00001000
        00010000...
        bitwise take random 11001011 & 00000001 -> 1 (true bc both last digits are 1 - the same)
        then 11001011 & 00000010 -> 1 (for the same reason above)
        then 11001011 & 00000100 -> 0 (false because first has 0 and second has 1) and so on
        this gives us a bran new 8-bit binary number
        */
        uint256 i = 1;
        uint256 index = 7;
        for(i = 1; i <= 128; i = i * 2){
            if(random & i != 0){
                geneArray[index] = uint8(_momDna % 100);
            }
            else{
                geneArray[index] = uint8(_dadDna % 100);
            }
            _momDna = _momDna / 100;
            _dadDna = _dadDna / 100;

            index = index - 1;
        }

        uint256 kidDna;
        for(i = 0; i < 8; i++){
            kidDna = kidDna + geneArray[i];
            if(i != 7){
                kidDna = kidDna * 100;
            }
        }
        return kidDna;
    }

}