const { Cart, Product } = require("../models/index.js")
const nodemailer = require("nodemailer")

class CartController {
    static addCart(req, res) {

        let productId = +req.params.id
        let userId = (req.session && req.session.user) ? req.session.user.id : null

        Cart.create({ ProductId: productId, UserId: userId, quantity: 1 })
            .then(data => {
                res.redirect("/")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static listCart(req, res) {
        let userId = (req.session && req.session.user) ? req.session.user.id : null
        let user = (req.session && req.session.user) ? req.session.user.username : null
        if (userId) {
            Cart.findAll({
                where: { UserId: userId },
                include: [{ model: Product }]
            })
                .then(carts => {
                    res.render("listCart.ejs", { carts, user })
                })
                .catch(err => {
                    res.send(err)
                })
        } else {
            // res.send(carts)
            res.render("listCart.ejs", { carts: [], user })
        }
    }

    static delete(req, res) {
        let id = +req.params.id

        Cart.destroy({
            where: { id: id }
        })
            .then(data => {
                res.redirect("/carts")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addQuantity(req, res) {
        let cartId = +req.params.id
        // console.log('AAA', cartId)

        Cart.findOne({
            where: { id: cartId }
        })
            .then(data => {
                return Cart.update({ UserId: data.UserId, ProductId: data.ProductId, quantity: data.quantity + 1 }, { where: { id: cartId } })
            })
            .then(cart => {
                res.redirect("/carts")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static reduceQuantity(req, res) {
        let cartId = +req.params.id

        Cart.findOne({
            where: { id: cartId }
        })
            .then(data => {
                return Cart.update({ UserId: data.UserId, ProductId: data.ProductId, quantity: data.quantity - 1 }, { where: { id: cartId } })
            })
            .then(cart => {
                res.redirect("/carts")
            })
            .catch(err => {
                res.send(err)
            })
    }
    static buy(req, res) {
        let email = (req.session && req.session.user) ? req.session.user.email : null
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'projectamin123@gmail.com',
                pass: 'Amin1234'
            }
        });

        var mailOptions = {
            from: 'projectamin123@gmail.com',
            to: `${email}`,
            subject: 'Pembelian Produk',
            text: 'Terima kasih!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.redirect(`/carts`, { carts: [] })
            } else {
                let userId = (req.session && req.session.user) ? req.session.user.id : null
                let user = (req.session && req.session.user) ? req.session.user.username : null
                Cart.destroy({
                    where: { UserId: userId }
                })
                    .then(data => {
                        res.render("sendMail.ejs", { email, user })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            }
        });
    }
}

module.exports = CartController