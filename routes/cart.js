const router = require("express").Router()
const cartController = require("../controllers/cart.js")

router.get("/:id/add", cartController.addCart)

module.exports = router