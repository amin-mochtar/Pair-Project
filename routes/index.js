const router = require("express").Router()
const productRouter = require("./product")
const routerLogin = require('./login')
const routerLogout = require('./logout')
const cartRouter = require("./cart")


const ProductController = require("../controllers/product.js")
const Controller = require('../controllers/ControllerRegister')
const cekLogin = require('../middleware/cekLogin')

router.get('/register', Controller.Register)
router.post('/register', Controller.PostRegister)
router.use('/login', routerLogin)
router.use('/logout', routerLogout)
router.get("/", ProductController.LandingPageProduct)

router.use(cekLogin)

router.use("/product", productRouter)
router.use("/carts", cartRouter)


module.exports = router