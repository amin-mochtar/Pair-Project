const router = require("express").Router()
const productRouter = require("./product")
const routerLogin = require('./login')
const cartRouter = require("./cart")

const ProductController = require("../controllers/product.js")
const Controller = require('../controllers/ControllerRegister')

router.get('/register', Controller.Register)
router.post('/register', Controller.PostRegister)
router.use('/login', routerLogin)
router.get("/", ProductController.LandingPageProduct)

router.use(function (req, res, next) {
  if (!req.session.userName) {
    res.redirect('/login')
  } else {
    next()
  }

})

router.use("/carts", cartRouter)
router.use("/products", productRouter)

module.exports = router