const { Product, Cart } = require("../models/index")

class ProductController {

    static LandingPageProduct(req, res) {
        let products
        var userId = (req.session && req.session.user) ? req.session.user.id : null
        if(userId) {
            Product.findAll()
            .then(data => {
                products = data
                return Cart.findAll({ where: { UserId: userId } })
            })
            .then(carts => {
                res.render('landingPage.ejs', { products, carts })
            })
            .catch(err => {
                res.send(err)
            })
        } else {
            Product.findAll()
            .then(data => {
                products = data
                console.log(products[0].convertedPrice())
                res.render('landingPage.ejs', { products, carts: [] })
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    static getProductDescription(req, res) {
        let id = +req.params.id
        Product.findOne({ where: { id } })
            .then(data => {
                res.render("product-description.ejs", { data })
            })
            .catch(err => {
                res.send(err)
            })
    }



}

module.exports = ProductController