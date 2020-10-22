const { User } = require('../models')

class ControllerRegister {
  static Register(req, res) {
    let error = req.query.error
    res.render('formRegister', { error })
  }

  static PostRegister(req, res) {
    let newUser = {
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email
    }

    User.create(newUser)
      .then(data => {
        res.redirect('/login')
      })
      .catch(err => {
        let error = err.errors[0].message
        if (err.name === "SequelizeValidationError") {
          res.redirect(`/register?error=${error}`)
        } else {
          res.send(err)
        }
      })
  }
}

module.exports = ControllerRegister