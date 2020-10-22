const router = require("express").Router()
const productController = require("../controllers/product.js")

// router.get("/add", productController.formAddToCart)
// router.post("/add", productController.addToCart)

router.get("/:id/description", productController.getProductDescription)

module.exports = router