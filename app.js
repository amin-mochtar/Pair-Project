const express = require("express")
const route = require("./routes/index.js")
const session = require("express-session")
const app = express()
const PORT = 5000

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'ini penting harus ada',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        sameSite: true // tambahan untuk security csrf attack
    }
}))

app.use(route)

app.listen(PORT, () => {
    console.log("berjalan di https://localhost:", PORT)
})