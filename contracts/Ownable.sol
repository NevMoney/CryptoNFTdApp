pragma solidity 0.5.12;

contract Ownable{
    address public owner; //owner variable
    
    modifier onlyOwner(){ //owner modifier
     require(msg.sender == owner);
     _;
 }
 
 constructor() public{
     owner = msg.sender;
 }
 
}