//append cats from contract onto the catalog page
function appendCat(dna, id){

    //first find and return cat DNA into readable string
    var KittyDna = catDna(dna);

    //then, build the catBox div into HTML element
    catBox(id);

    //and then renter the cat CSS style depending on the string
    renderCat(KittyDna, id);
    $("#catDNA" + id).html(`
    
    `)
}

function catDna(dnaStr){

    var dna = {
        "headcolor": dnaStr.substring(0, 2),
        
    }
}