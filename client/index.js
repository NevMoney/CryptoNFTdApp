//this is where web3.js code will be implemented here
//first we connect to web3 and MetaMask
var web3 = new Web3(Web3.givenProvider);

//need to identify a few variables
var instance;
var user;
var contractAddress = "0xed59863A4124a6289713D737f16C33A6fa7f5e53";

//when document loads, we'll have a function to connect to ethereum + connect our JS to contract
//abi - application binary interface --> specification to pass onto MetaMask, basically, a 
//summary of what contract does, which we get from the build folder...
//find abi under the contract in build folder, then create new file called abi.js and past the object
$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);

        instance.events.Birth().on("data", function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#catCreateBtn").css("display", "block");
            $("#catCreateBtn").text("Meow For Joy! You have just created your own DigiCat! Congrats! Owner: " + owner 
                                    + ", kittenId: " + kittenId 
                                    + ", momId: " + momId 
                                    + ", dadId: " + dadId 
                                    + ", genes: " + genes)
        })
        .on("error", console.error);

    });
   
});

function createKitty(){
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txHash){
        if(error)
            console.log(error);
        else
            console.log(txHash);
    });
}


