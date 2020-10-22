const { Product, Cart } = require("../models/index")


class ProductController {

    static LandingPageProduct(req, res) {
        let products
        Product.findAll()
            .then(data => {
                products = data
                return Cart.findAll()
            })
            .then(carts => {
                res.render('landingPage.ejs', { products, carts })

            })
            .catch(err => {
                res.send(err)
            })
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