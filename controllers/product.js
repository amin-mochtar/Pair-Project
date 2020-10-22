const { Product, Cart } = require("../models/index")

class ProductController {

    static LandingPageProduct(req, res) {
        let user = (req.session && req.session.user) ? req.session.user.username : null
        //res.send(user)
        let products
        var userId = (req.session && req.session.user) ? req.session.user.id : null
        if(userId) {
            Product.findAll()
            .then(data => {
                products = data
                return Cart.findAll({ where: { UserId: userId } })
            })
            .then(carts => {
                res.render('landingPage', { products, carts, user })

            })
            .catch(err => {
                res.send(err)
            })
        } else {
            Product.findAll()
            .then(data => {
                products = data
                console.log(products[0].convertedPrice())
                res.render('landingPage.ejs', { products, carts: [], user })
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    static getProductDescription(req, res) {
        let id = +req.params.id
        let user =(req.session && req.session.user) ? req.session.user.usrname : null
        Product.findOne({ where: { id } })
            .then(data => {
                res.render("product-description.ejs", { data, user})
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