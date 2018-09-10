var logger = require("../utils/logger");
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
const db = require('../models');

module.exports = {
    updateProduct(req, res) {
        return db
            .products
            .findOne({
                where: {
                    "id": req.body.id
                }
            })
            .then(function (obj) {
                history = {
                    id: uid.randomUUID(10),
                    product_id: obj.id,
                    product_type: obj.product,
                    name: obj.name,
                    type: obj.type,
                    brand: obj.brand,
                    category: obj.category,
                    quantity: obj.quantity,
                    mrp: obj.mrp,
                    selling_price: obj.selling_price,
                    vendor_id: obj.vendor_id,
                    shopper_id: req.body.shopper_id,
                    feature: obj.feature,
                    description: obj.description,
                    web_address: obj.web_address,
                    container: obj.container,
                    image: obj.image,
                    status: obj.status,
                    subscriptions_allowed: obj.subscriptions_allowed,
                    updated_by: obj.updated_by
                }
                obj
                    .update(req.body)
                    .then(function (obj1) {
                        console.log("In Here insert");
                        db
                            .products_history
                            .create(history)
                            .then(function (obj3) {
                                console.log("In Here insert3");
                                res
                                    .status(201)
                                    .send(obj3)
                            })
                            .catch((error) => res.status(400).send(error));
                    })
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    updateSubscription(req, res) {
        return db
            .subscriptions
            .findOne({
                where: {
                    "subscriptions_id": req.body.subscriptions_id
                }
            })
            .then(function (obj) {
                obj
                    .update(req.body)
                    .then(function (obj2) {
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
                            .then(function (objlist) {
                                console.log("adding child");
                                var promises = [];
                                var subscriptionsDetails = req
                                    .body
                                    .details
                                    for (var i = 0; i < subscriptionsDetails.length; i++) {
                                        subscriptionsDetails[i]["subscriptions_id"] = req.body.subscriptions_id
                                        subscriptionsDetails[i]["id"] = uid.randomUUID(10)
                                        promises.push(subscriptionsDetail(subscriptionsDetails[i]))
                                    }
                                    Promise
                                    .all(promises)
                                    .then((pins) => {
                                        console.log("====>" + pins);
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
                                    });
                                function subscriptionsDetail(detailsdata) {
                                    return new Promise(function (fulfill, reject) {
                                        db
                                            .subscriptions_details
                                            .create(detailsdata)
                                            .then((detail) => fulfill(detail))
                                            .catch((error) => reject(error));
                                    });
                                }
                            })
                    })
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    updateShopper(req, res) {
        return db
            .partner_shop
            .findOne({
                where: {
                    "shopper_id": req.body.shopper_id
                }
            })
            .then(function (obj) {
                obj
                    .update(req.body)
                    .then((responseData) => res.status(201).send(responseData))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    updateVendor(req, res) {
        return db
            .vendor
            .findOne({
                where: {
                    "vender_id": req.body.vender_id
                }
            })
            .then(function (obj) {
                obj
                    .update(req.body)
                    .then((responseData) => res.status(201).send(responseData))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));

    },

    updateTax(req, res) {
        return db
            .tax_details
            .findOne({
                where: {
                    "id": req.body.id
                }
            })
            .then(function (obj) {
                obj
                    .update(req.body)
                    .then((responseData) => res.status(201).send(responseData))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    updateCatagory(req, res) {
        return db
            .catagory
            .findOne({
                where: {
                    "id": req.body.id
                }
            })
            .then(function (obj) {
                obj
                    .update(req.body)
                    .then((responseData) => res.status(201).send(responseData))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    updateSubCatagory(req, res) {
        return db
            .sub_catagory
            .findOne({
                where: {
                    "id": req.body.id
                }
            })
            .then(function (obj) {
                obj
                    .update(req.body)
                    .then((responseData) => res.status(201).send(responseData))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
