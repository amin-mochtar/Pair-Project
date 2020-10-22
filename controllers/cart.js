const { Cart } = require("../models/index.js")

class CartController {
    static addCart(req, res) {
        let id = req.params.id
        res.send(id)
        // let productId = +req.params.id
        // let userId = +req.session.user.id

        // Cart.create({ProductId : productId, UserId : userId, quantity : 1})
        // .then(data => {
        //     res.redirect("/")
        // })
        // .catch(err => {
        //     res.send(err)
        // })
    }

    static delete(req, res) {
        let id = +req.params.id
        Product.destroy({
            where: { id: id }
        })
            .then(data => {
                res.redirect("/cart")
            })
            .catch(err => {
                res.redirect("/:id/delete")
            })
    }
}

module.exports = CartController