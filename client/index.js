//this is where web3.js code will be implemented here
//first we connect to web3 and MetaMask
var web3 = new Web3(Web3.givenProvider);
ethereum.autoRefreshOnNetworkChange = false;

//need to identify a few variables + use contract address from Ganache every time deployed
var instance;
var marketplaceInstance;
var user;
var contractAddress = "0x1D1179A7914AF5039fE7438882585708A571BacA";
var marketplaceAddress = "0xDE7050C4715bB3860689f3D1854aeF96D982f171";



//when document loads, we'll have a function to connect to ethereum + connect our JS to contract
//abi - application binary interface --> specification to pass onto MetaMask, basically, a 
//summary of what contract does, which we get from the build folder...
//find abi under the contract in build folder, then create new file called abi.js and past the object
$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi.Kittycontract, contractAddress, {from: accounts[0]});
        marketplaceInstance = new web3.eth.Contract(abi.KittyMarketplace, marketplaceAddress, {from: accounts[0]});
        user = accounts[0];

        instance.events.Birth().on("data", function(event){
            
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#catCreatedMsg").css("display", "block");
            $("#catCreatedMsg").text("Meow For Joy! You have just created your own DigiCat! Congrats! Owner: " + owner 
                                    + ", kittenId: " + kittenId 
                                    + ", momId: " + momId 
                                    + ", dadId: " + dadId 
                                    + ", genes: " + genes)
        })
        .on("error", console.error);

        marketplaceInstance.events.MarketTransaction().on("data", (event) => {
            
            var eventType = event.returnValues["TxType"].toString();
            var tokenId = event.returnValues["tokenId"];
            if (eventType == "Kitty purchased"){
                alert("Success! You own Kitty ID: " + tokenId);
            }
            if(eventType == "Offer created"){
                alert("Offer set Kitty ID: " + tokenId);
            }
            if(eventType == "Offer removed"){
                alert("Offer removed, Kitty ID: " + tokenId);
            }
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


//displaying kitty based on user address; once page is loaded you run getKitties function
async function getKitties(){

    var arrayId;
    var kitty;
    
    try {
        arrayId = await instance.methods.getKittyByOwner(user).call();
        for (i = 0; i < arrayId.length; i++){
            kitty = await instance.methods.getKitty(arrayId[i]).call();
            appendCat(kitty.genes, arrayId[i], kitty.generation, false);
        }
    }
    catch(err){
        console.log(err);
    }
    
}

//get the inventory of cats available for sale to list on marketplace
async function getInventory() {
    
    try {
        var arrayId = await marketplaceInstance.methods.getAllTokenOnSale().call();
        console.log("getInventory array: ", arrayId);
        for(i = 0; i < arrayId.length; i++){
            if(arrayId[i] != 0){
                const offer = await checkOffer(arrayId[i]);

                console.log(offer, arrayId[i]);

                if(offer.onSale) appendKitty(arrayId[i], offer.price);
            }
        }
    }
    catch(err){
        console.log(err);
    }
}

//appending cat to breed select
async function breed(dadId, momId) {
    try {
        var newKitty = await instance.methods.breed(dadId, momId).send();
        //WARNING: code stops working here for unknown reason
        console.log("newKitty: ", newKitty);
        setTimeout(() => {      
            location.reload(".catalog")}, 5000);
    } catch (err) {
        console.log(err);
    } 
}

//appending cats for marketplace (added "isMarketPlace = true")
async function appendKitty(id, price) {
    var kitty = await instance.methods.getKitty(id).call();
    appendCat(kitty[0], id, kitty["generation"], true, price);
}

// async function catOwnership(id) {
//     var address = await instance.methods.ownerOf(id).call();
//     if (address.toLowerCase() == user.toLowerCase()) {
//         return true;
//     }
//     return false;
// }

async function sellCat(id) {
    const offer = await checkOffer(id);
    if(offer.onSale) return alert("Kitty already listed for sale.");

    var price = $("#catPrice").val();
    var amount = web3.utils.toWei(price, "ether");
    const isApproved = await instance.methods.isApprovedForAll(user, marketplaceAddress).call();
    try {
        if(!isApproved){
            await instance.methods.setApprovalForAll(marketplaceAddress, true).send().on("receipt", function(receipt){
                console.log("operator approval", receipt);
            });
        }

        await marketplaceInstance.methods.setOffer(amount, id).send();
        gotToInventory();   
    }
    catch (err) {
        console.log(err);
    } 
}

async function buyKitten(id, price) {
    console.log(id); //checked id and it matches & getInventory also confirms what's available
    await checkOffer(id); 
    console.log(checkOffer()); //function throws an error (pulls line 193)
    // the error is coming from MetaMask throwing the error
    var amount = web3.utils.toWei(price, "ether");
    try {
        await marketplaceInstance.methods.buyKitty(id).send({value: amount});
        console.log("buy cat ", id, offer); //never get this far in the function
    }
    catch (err) {
        console.log(err);
    }
}

//To cancel the sale:
async function removeOffer(id) {
    await marketplaceInstance.methods.removeOffer(id).send();
    gotToInventory(); 
}

async function checkOffer(id) {
    let res;

    try {
        res = await marketplaceInstance.methods.getOffer(id).call();
        var price = res.price;
        var seller = res.seller;
        var onSale = res.active;
        
        price = web3.utils.fromWei(price, "ether");
        var offer = {seller: seller, price: price, onSale: onSale};
        return offer;
    }
    catch (err) {
        console.log(err);
        return;
    }
}