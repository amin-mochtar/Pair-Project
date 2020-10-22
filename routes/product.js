const router = require("express").Router()
const productController = require("../controllers/product.js")

// router.get("/add", productController.formAddToCart)
// router.post("/add", productController.addToCart)

router.get("/:id/description", productController.getProductDescription)
router.get('/manipulasi', productController.Manipulasi)
router.get('/add', productController.addForm)
router.post('/add', productController.addPost)


module.exports = router