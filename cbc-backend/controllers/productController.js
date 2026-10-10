import Product from "../models/product.js";
import { isAdmin } from "./userController.js"

export function createProduct(req, res){
  
    if(! isAdmin(req)){
        res.status(403).json({
            message: "Forbidden"
        })
        return
    }

    const product = new Product(req.body)

    product.save().then(
        ()=>{
            res.json({
                message: "Product created successfully"
            })
        }
    ).catch(
        (error) => {
            res.status(500).json({
                message: "Error creating product",
                error: error.message
            })
        }
    )
}

export function getAllProducts(req, res){
    if(isAdmin(req)){
        Product.find().then(
            (products) => {
            res.json(products)
        }).catch(
            (error) => {
                res.status(500).json({
                    message: "Error fetching products",
                    error: error.message
                })
            }
        )
    }else{
        Product.find({isAvailable: true}).then(
            (products) => {
            res.json(products)
        }).catch(
            (error) => {
                res.status(500).json({
                    message: "Error fetching products",
                    error: error.message
                })
            }
        )
    }
}

export function deleteProduct(req, res){
    if (! isAdmin(req)){
        res.status(403).json({
            message: "Only admin can delete products"
        })
        return
    }

    const productId = req.params.productId
    
    Product.deleteOne({productId: productId}).then(
        ()=>{
            res.json({
                message: "Product deleted successfully"
            })
        }
    )

}

export function updateProduct(req, res){
    if (! isAdmin(req)){
        res.status(403).json({
            message: "Only admin can update products"
        })
        return
    }

    const productId = req.params.productId 

    Product.updateOne({productId: productId}, req.body).then(
        () => {
            res.json({
                message: "Product updated successfully"
            })
        }
    )
}

export function getProductById(req, res){
    const productId = req.params.productId

    Product.findOne({productId: productId}).then(
        (product) => {
            if (!product) {
                res.status(404).json({
                    message: "Product not found"
                })
                return
            }else {
                if (product.isAvailable){
                    res.json(product)
                }else {
                    if (isAdmin(req)){
                        res.json(product)
                    }else{
                        res.status(404).json({
                        message: "Product not found"
                    })
                  } 
              }
            }
            
        }
    ).catch(
        (error) => {
            res.status(500).json({
                message: "Error fetching product",
                error: error.message
            })
        }
    )
}

export function trendingProducts(req, res){
    res.json({
        message: "Trending products will be displayed here"
    })
}
