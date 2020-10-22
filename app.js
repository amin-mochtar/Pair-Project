const express = require("express")
const route = require("./routes/index.js")
const app = express()
const session = require("express-session")
const PORT = 3000

app.set("view engine", "ejs")
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