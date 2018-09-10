var logger = require("../utils/logger");
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
const db = require('../models');

module.exports = {
    deleteProduct(req, res) {
        return db
            .products
            .update({
                "status": "inactive"
            }, {
                where: {
                    "id": req.body.id
                },
                returning: true,
                plain: true
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },

    deleteVendor(req, res) {
        return db
            .vendor
            .update({
                "status": "inactive"
            }, {
                where: {
                    "vender_id": req.body.vender_id
                },
                returning: true,
                plain: true
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    deleteSubscription(req, res) {
        return db
            .subscriptions
            .update({
                "status": "inactive"
            }, {
                where: {
                    "subscriptions_id": req.body.subscriptions_id
                },
                returning: true,
                plain: true
            })
            .then(function (obj) {
                db
                    .subscriptions_details
                    .update({
                        "status": "inactive"
                    }, {
                        where: {
                            "subscriptions_id": req.body.subscriptions_id
                        },
                        returning: true,
                        plain: true
                    })
                    .then(function (obj) {
                        db
                            .subscriptions
                            .findAll({
                                where: {
                                    "subscriptions_id": req.body.subscriptions_id
                                },
                                include: [
                                    {
                                        model: db.subscriptions_details
                                    }
                                ]
                            })
                            .then(function (subscriptions) {
                                res
                                    .status(201)
                                    .send(subscriptions)
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                        res
                            .status(400)
                            .send(error)
                    })
                })
            .catch((error) => res.status(400).send(error));
    },
    deleteOrder(req, res) {
        return db
            .order
            .update({
                "status": "inactive"
            }, {
                where: {
                    "order_id": req.body.order_id
                },
                returning: true,
                plain: true
            })
            .then(function (obj) {
                db
                    .order_details
                    .update({
                        "status": "inactive"
                    }, {
                        where: {
                            "order_id": req.body.order_id
                        },
                        returning: true,
                        plain: true
                    })
                    .then(function (obj) {
                        db
                            .order
                            .findAll({
                                where: {
                                    "order_id": req.body.order_id
                                },
                                include: [
                                    {
                                        model: db.order_details
                                    }
                                ]
                            })
                            .then(function (orders) {
                                res
                                    .status(201)
                                    .send(orders)
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                        res
                            .status(400)
                            .send(error)
                    })
                })
            .catch((error) => res.status(400).send(error));
    },
    deleteShopper(req, res) {
        return db
            .partner_shop
            .update({
                "status": "inactive"
            }, {
                where: {
                    "shopper_id": req.body.shopper_id
                },
                returning: true,
                plain: true
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    deleteTax(req, res) {
        return db
            .tax_details
            .update({
                "status": "inactive"
            }, {
                where: {
                    "id": req.body.id
                },
                returning: true,
                plain: true
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    deleteCatagory(req, res) {
        return db
            .catagory
            .update({
                "status": "inactive"
            }, {
                where: {
                    "id": req.body.id
                },
                returning: true,
                plain: true
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    deleteSubCatagory(req, res) {
        return db
            .sub_catagory
            .update({
                "status": "inactive"
            }, {
                where: {
                    "id": req.body.id
                },
                returning: true,
                plain: true
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    }
};
