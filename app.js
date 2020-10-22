const express = require("express")
const route = require("./routes/index.js")

const app = express()
const PORT = 5000

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}))

app.use(route)

app.listen(PORT, () => {
    console.log("berjalan di https://localhost:",PORT)
})