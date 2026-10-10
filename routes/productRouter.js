import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductById, trendingProducts, updateProduct } from "../controllers/productController.js"

const productRouter = express.Router()

productRouter.get("/", getAllProducts)
productRouter.post("/", createProduct)
productRouter.get("/trending", trendingProducts)
productRouter.get("/:productId", getProductById)    //params thiyena route samanyen anthimata dana eka hodai
productRouter.delete("/:productId", deleteProduct)
productRouter.put("/:productId", updateProduct)


export default productRouter