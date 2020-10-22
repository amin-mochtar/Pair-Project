const { Product, Cart } = require("../models/index")


class ProductController {

    static LandingPageProduct(req, res) {
        let user = req.query.userName
        //res.send(user)
        let products
        Product.findAll()
            .then(data => {
                products = data
                return Cart.findAll()
            })
            .then(carts => {
                res.render('landingPage', { products, carts, user })

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

    static Manipulasi(req, res) {
        Product.findAll()
            .then(data => {
                res.render('product', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        res.render('formAddProduct')
    }

    static addPost(req, res) {
        let newProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            picture: req.body.picture
        }

        Product.create(newProduct)
            .then(() => {
                res.redirect('/product/manipulasi')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ProductController