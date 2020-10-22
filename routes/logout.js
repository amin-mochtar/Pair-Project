const router = require('express').Router()
const Controller = require('../controllers/ControllerLogout')

router.get('/', Controller.Logout)

module.exports = router