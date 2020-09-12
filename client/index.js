//this is where web3.js code will be implemented here
//first we connect to web3 and MetaMask
var web3 = new Web3(Web3.givenProvider);

//need to identify a few variables + use contract address from Ganache every time deployed
var instance;
var user;
var contractAddress = "0x4502806bCB49e446fCe688064C44540Cc959bcAe";



//when document loads, we'll have a function to connect to ethereum + connect our JS to contract
//abi - application binary interface --> specification to pass onto MetaMask, basically, a 
//summary of what contract does, which we get from the build folder...
//find abi under the contract in build folder, then create new file called abi.js and past the object
$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(accounts);

        console.log(instance);

        getKitties();

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


//displaying kitty based on user address
//once page is loaded you run getKitties function
async function getKitties(){

    var arrayId;
    var kitty;
    
    try {
        arrayId = await instance.methods.getKittyByOwner(user).call();

        console.log("arrayId", arrayId);
    }
    catch(err){
        console.log(err);
    }
    for (i = 0; i < arrayId.length; i++){
        kitty = await instance.methods.getKitty(arrayId[i]).call();
        console.log("kitty info:", kitty);
        appendCat(kitty.genes, i);
    }
   
}