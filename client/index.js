//this is where web3.js code will be implemented here
//first we connect to web3 and MetaMask
var web3 = new Web3(Web3.givenProvider);

//need to identify a few variables + use contract address from Ganache every time deployed
var instance;
var marketplaceInstance;
var user;
var contractAddress = "0xeb7DEc206B359160B1bb3F03e4dF6056a679c58d";
var marketplaceAddress = "0x08fE938dD9D30c4ad648F8cB1330A4eF9192abc8";



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
            console.log(event);
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
            console.log(event);
            var eventType = event.returnValues["TxType"].toString();
            var tokenId = events.returnValues["tokenId"];
            if (eventType == "Kitty purchased"){
                alert_msg("Successful Kitty purchase! You are the new owner of this Kitty with Token ID: " + tokenId);
            }
            if(eventType == "Offer created"){
                alert_msg("Success! Offer set for Kitty ID: " + tokenId)
            //see week 9 day 5 video 3 for additional stuff you can add   
            }
            if(eventType == "Offer removed"){
                alert_msg("Successfully removed offer to sell Kitty ID: " + tokenId)
                //again see W9 D5 Vid3 for add stuff
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
    var arrayId = await marketplaceInstance.methods.getAllTokenOnSale().call();
    console.log("getInventory array: ", arrayId);
    for(i = 0; i < arrayId.length; i++){
        if(arrayId[i] != 0){
            appendKitty(arrayId[i]);
        }
    }
}

//appending cat to breed select
async function breed(dadId, momId) {
    try {
        var newKitty = await instance.methods.breed(dadId, momId).send();
        //WARNING: code stops working here for unknown reason
        console.log("newKitty: ", newKitty);
        setTimeout(() => {      
            go_to(".catalog")
        }, 2000);
    } catch (err) {
        console.log(err);
    } 
}

//appending cats for marketplace (added "isMarketPlace = true")
async function appendKitty(id) {
    var kitty = await marketplaceInstance.methods.getKitty(id).call();
    appendCat(kitty[0], id, kitty["generation"], true);
}

// async function singleKitty() {
//     var id = get_variables().catId;
//     var kitty = await instance.methods.getKitty(id).call();
//     renderSingleCat(kitty[0], id, kitty["generation"]);

// }

async function catOwnership(id) {
    var address = await instance.methods.ownerOf(id).call();
    if (address.toLowerCase() == user.toLowerCase()) {
        return true;
    }
    return false;
}

async function sellCat(id) {
    var price = $("#catPrice").val();
    var amount = web3.utils.toWei(price, "ether");
    try {
        //check if user has approved marketplace (isApprovedForAll())
        const isApproved = await instance.methods.isApprovedForAll(user, marketplaceAddress).call();
        //if false, approve first
        if(!isApproved){
            await instance.methods.setApprovalForAll(marketplaceAddress, true).send().on("rececipt", function(receipt){
                console.log("operator approval", receipt);
                getInventory();
            })
        }
        //if true
        else {
            await marketplaceInstance.methods.setOffer(amount, id).send();
            getInventory();
        }    
    }
    catch (err) {
        console.log(err);
    } 
}

async function buyKitten(id, price) {
    var amount = web3.utils.toWei(price, "ether");
    try {
        await marketplaceInstance.methods.buyKitty(id).send({value: amount});
    }
    catch (err) {
        console.log(err);
    }
}

async function checkOffer(id) {
    let res;

    try {
        res = await marketplaceInstance.methods.getOffer(id).call();
        var price = res["price"];
        var seller = res["seller"];
        var onsale = false;

        if (price > 0) {
            onsale = true;
        }
        price = web3.utils.fromWei(price, "ether");
        var offer = {seller: seller, price: price, onsale: onsale}
        return offer;
    }
    catch (err) {
        console.log(err);
        return;
    }
}