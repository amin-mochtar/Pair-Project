const router = require('express').Router()
const Controller = require('../controllers/ControllerLogin')

router.get('/', Controller.Login)
router.post('/', Controller.postLogin)

module.exports = router