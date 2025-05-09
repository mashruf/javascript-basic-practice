function discountValidator(isPremiumMember, hasCupon){
    if(isPremiumMember==true || hasCupon==true){
        console.log("Discount applied!");
        
    }
    else{
        console.log("No discount!");
        
    }
}

let premiumMember = false;
let cupon = false;

discountValidator(premiumMember,cupon);
