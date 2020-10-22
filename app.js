const express = require("express")
const route = require("./routes/index.js")

const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))

app.use(route)

app.listen(PORT, () => {
    console.log("berjalan di https://localhost:",PORT)
})