function productFind(password){
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                if(password=="1234"){
                    resolve([
                        {id:"1234", name:"Product 1", price:100},
                        {id:"1235", name:"Product 2", price:200},
                        {id:"1236", name:"Product 3", price:300},
                    ])
                } else {
                    reject({message: "Invalid password"})
                }
            }, 5000)    
        }
    )
}

productFind("1234").then(
    (products)=>{
        console.log("Products found", products)
    }

).catch(
    (error)=>{
        console.log("Error finding products", error)
    }

).finally(
    ()=>{
        console.log("Finished finding products")
    }

)