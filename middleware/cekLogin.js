function cekLogin(req, res, next) {
  if (!req.session.user) {
    res.redirect('/login')
  } else {
    next()
  }
}

function cekAdmin(req, res, next) {
  if (req.session.user && req.session.user.username === "fauza") {
    let admin = req.session.userName
    res.redirect(`/?status=${admin}`)
  }
}

module.exports = cekLogin, cekAdmin