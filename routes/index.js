const router = require("express").Router()
const Controller = require('../controllers/ControllerRegister')
const routerLogin = require('./login')

router.get('/register', Controller.Register)
router.post('/register', Controller.PostRegister)
router.use('/login', routerLogin)

router.use(function (req, res, next) {
  if (!req.session.userName) {
    res.redirect('/login')
  } else {
    next()
  }

})

router.get('/', (rew, res) => {
  res.send('halaman utama')
})


module.exports = router