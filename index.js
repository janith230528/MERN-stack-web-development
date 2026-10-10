import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import jwt from "jsonwebtoken"
import productRouter from "./routes/productRouter.js"

const mongouri = "mongodb://admin:1234@ac-2h1pnke-shard-00-00.3a1113s.mongodb.net:27017,ac-2h1pnke-shard-00-01.3a1113s.mongodb.net:27017,ac-2h1pnke-shard-00-02.3a1113s.mongodb.net:27017/?ssl=true&replicaSet=atlas-sxlzv1-shard-0&authSource=admin&appName=Cluster0"

mongoose.connect(mongouri).then(
    () =>{
    console.log("connected to MongoDB cluster")} 
) 

const app = express()

app.use(express.json()) //request eka console ekata clearly display karaganna use karana middleware ekak

app.use((req, res, next)=>{

    const authorizationHeader = req.header("Authorization") //request eke header eke authorization key eka ganna

    if (authorizationHeader != null){

        const token = authorizationHeader.replace("Bearer ","") //token eka ganna

        jwt.verify(token, "secretkey2003528", 
            (error, content)=>{
              if (content == null){
                  console.log("Token is invalid or expired") //token eka invalid nam console ekata display karanna
                  res.json({
                    message: "Token is invalid or expired"
                  }) 
              } else {
                req.user = content //token eke content eka request ekata attach karanna
                next()
              }
        })
    }else {
        next() //token eka nathnam next middleware ekata yanna
    }
})

app.use("/users", userRouter)
app.use("/products", productRouter)

app.listen(5000, () =>{
    console.log("server is running")
});



