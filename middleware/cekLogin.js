function cekLogin(req, res, next) {
  if (!req.session.userName) {
    res.redirect('/login')
  } else {
    next()
  }
}

function cekAdmin(req, res, next) {
  if (req.session.userName === "fauza") {
    let admin = req.session.userName
    res.redirect(`/?status=${admin}`)
  }
}

module.exports = cekLogin, cekAdmin