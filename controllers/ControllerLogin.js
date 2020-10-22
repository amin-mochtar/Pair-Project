const { User } = require('../models')
const bcrypt = require('bcryptjs')
const session = require('express-session')

class ControllerLogin {
  static Login(req, res) {
    let error = req.query.error
    res.render('login', { error })
  }

  static postLogin(req, res) {
    let user = {
      userName: req.body.userName,
      password: req.body.password
    }

    User.findOne({ where: { userName: user.userName } })
      .then(data => {
        if (data) {
          let cekPassword = bcrypt.compareSync(user.password, data.password)
          if (cekPassword) {
            req.session.userName = data.userName
            return res.redirect('/')
          } else {
            let error = 'Password Anda Salah'
            return res.redirect(`/login?error=${error}`)
          }
        } else {
          let error = `user name tidak ada`
          return res.redirect(`/login?error=${error}`)
        }
      })
      .catch(err => {
        res.send('ini error')
      })
  }
}

module.exports = ControllerLogin