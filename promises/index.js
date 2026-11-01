const isShopOpen = true;
const haveMoney = true;
const isVehicleOkay = true;

const bringMeChocolate = new Promise (
    (resolve, reject) => {
        setTimeout(()=>{
            if(isShopOpen){
                if(haveMoney){
                    if(isVehicleOkay){
                        resolve({
                            brand: "Cadbury",
                            flavour: "Milk Chocolate",
                        });
                    } else{
                        reject("Vehicle is not okay")
                    }
                } else{
                    reject("No money")
                }
            }else{
                reject("Shop is closed")
            }
        }, 5000)
    }
)

console.log("software Started")

bringMeChocolate.then(
    (chocolate)=>{
        console.log("I have brought chocolate", chocolate)
    }
).catch(
    (error)=>{
        console.log("I could not bring chocolate", error)
    }
).finally(
    ()=>{
        console.log("software Ended")
    }
)