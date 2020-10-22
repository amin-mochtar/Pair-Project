const router = require("express").Router()
const productRouter = require("./product")
const ProductController = require("../controllers/product.js")
const cartRouter = require("./cart")

router.get("/", ProductController.LandingPageProduct)
router.use("/carts", cartRouter)
router.use("/products", productRouter)

module.exports = router