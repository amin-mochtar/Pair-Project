const router = require("express").Router()
const CartController = require("../controllers/cart.js")

router.get("/", CartController.listCart)
router.get("/buy", CartController.buy)

router.get("/:id/add", CartController.addCart)

router.get("/:id/add-quantity", CartController.addQuantity)
router.get("/:id/delete", CartController.delete)

router.get("/:id/reduce-quantity", CartController.reduceQuantity)


module.exports = router