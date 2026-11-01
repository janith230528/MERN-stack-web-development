const isShopOpen = true;
const haveMoney = true;
const isVehicleOkay = true;

const bringMeChocolate = new Promise (
    (resolve, reject) => {
        setTimeout(()=>{
            if(isShopOpen){
                if(haveMoney){
                    if(isVehicleOkay){
                        resolve()
                    } else{
                        reject()
                    }
                } else{
                    reject()
                }
            }
        }, 5000)
    }
)

console.log("software Started")

bringMeChocolate.then(
    ()=>{
        console.log("I have brought chocolate")
    }
).catch(
    ()=>{
        console.log("I could not bring chocolate")
    }
).finally(
    ()=>{
        console.log("software Ended")
    }
)