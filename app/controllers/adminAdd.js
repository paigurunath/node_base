var logger = require("../utils/logger");
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
const db = require('../models');

module.exports = {
    addProduct(req, res) {
        return db
            .products
            .create({
                id: uid.randomUUID(10),
                product: req.body.product,
                name: req.body.name,
                type: req.body.type,
                brand: req.body.brand,
                category: req.body.category,
                quantity: req.body.quantity,
                mrp: req.body.mrp,
                selling_price: req.body.selling_price,
                vendor_id: req.body.vendor_id,
                shopper_id: req.body.shopper_id,
                feature: req.body.feature,
                description: req.body.description,
                web_address: req.body.web_address,
                container: req.body.container,
                image: req.body.image,
                status: req.body.status,
                subscriptions_allowed: req.body.subscriptions_allowed,
                updated_by: req.body.updated_by,
                sub_catagory_id: req.body.sub_catagory_id,
                tax_details: req.body.tax_details
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },

    addVendor(req, res) {
        return db
            .vendor
            .create({
                vender_id: uid.randomUUID(10),
                vender_name: req.body.vender_name,
                address: req.body.address,
                aggreement_no: req.body.aggreement_no,
                contact_person: req.body.contact_person,
                contact_person_cell: req.body.contact_person_cell,
                email: req.body.email,
                supplier_person: req.body.supplier_person,
                supplier_person_cell: req.body.supplier_person_cell,
                status: req.body.status
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },
    addSubscription(req, res) {
        return db
            .subscriptions
            .create({
                subscriptions_id: uid.randomUUID(10),
                user_id: req.body.user_id,
                amount: req.body.amount,
                shopper_id: req.body.shopper_id,
                freqency: req.body.freqency,
                subscriptions_start_date: req.body.subscriptions_start_date,
                status: req.body.status,
                details: req.body.details
            })
            .then((function (subscriptions) {
                console.log("adding child");
                console.log("adding child");
                var promises = [];
                var subscriptionsDetails = req
                    .body
                    .details
                    for (var i = 0; i < subscriptionsDetails.length; i++) {
                        subscriptionsDetails[i]["subscriptions_id"] = subscriptions.subscriptions_id
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
                                    "subscriptions_id": subscriptions.subscriptions_id
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

            }))
            .catch((error) => res.status(400).send(error));
    },
    addOrder(req, res) {
        return db
            .order
            .create({
                order_id: uid.randomUUID(10),
                user_id: req.body.user_id,
                amount: req.body.amount,
                shopper_id: req.body.shopper_id,
                status: req.body.status,
                details: req.body.details,
                payment_id: req.body.payment_id,
                delevery_date: req.body.delevery_date
            })
            .then((function (orders) {
                console.log("adding child");
                var promises = [];
                var ordersDetails = req
                    .body
                    .details
                    for (var i = 0; i < ordersDetails.length; i++) {
                        ordersDetails[i]["order_id"] = orders.order_id
                        ordersDetails[i]["id"] = uid.randomUUID(10)
                        promises.push(ordersDetail(ordersDetails[i]))
                    }
                    Promise
                    .all(promises)
                    .then((pins) => {
                        console.log("====>" + pins);
                        db
                            .order
                            .findAll({
                                where: {
                                    "order_id": orders.order_id
                                },
                                include: [
                                    {
                                        model: db.order_details
                                    }
                                ]
                            })
                            .then((orders) => res.status(201).send(orders))
                            .catch((error) => res.status(400).send(error));

                    })
                    .catch((error) => {
                        console.log(error);
                        res
                            .status(400)
                            .send(error)
                    });
                function ordersDetail(detailsdata) {
                    return new Promise(function (fulfill, reject) {
                        db
                            .order_details
                            .create(detailsdata)
                            .then((detail) => fulfill(detail))
                            .catch((error) => reject(error));
                    });
                }

            }))
            .catch((error) => res.status(400).send(error));
    },
    addPinCode(req, res) {
        var pinlist = req.body;
        var promises = [];
        for (var i = 0; i < pinlist.length; i++) {
            pinlist[i]["id"] = uid.randomUUID(10),
            promises.push(insertPin(pinlist[i]))
        }
        Promise
            .all(promises)
            .then((pins) => res.status(201).send(pins))
            .catch((error) => res.status(400).send(error));
        function insertPin(pindata) {
            return new Promise(function (fulfill, reject) {
                db
                    .pin_code
                    .create(pindata)
                    .then((pin) => fulfill(JSON.parse(pin)))
                    .catch((error) => reject(error));
            });
        }
    },
    addShopper(req, res) {
        return db
            .partner_shop
            .create({
                shopper_id: uid.randomUUID(10),
                shopper_name: req.body.shopper_name,
                address: req.body.address,
                aggreement_no: req.body.aggreement_no,
                contact_person: req.body.contact_person,
                contact_person_cell: req.body.contact_person_cell,
                email: req.body.email,
                buildings_coverage: req.body.buildings_coverage,
                status: req.body.status
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    addNewTax(req, res) {
        return db
            .tax_details
            .create(
                {id: uid.randomUUID(10), tax_name: req.body.tax_name, slab: req.body.slab, rate: req.body.rate, description: req.body.description}
            )
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    addCatagory(req, res) {
        return db
            .catagory
            .create(
                {id: uid.randomUUID(10), catagory_name: req.body.catagory_name, description: req.body.description, picture: req.body.picture, status: req.body.status}
            )
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    addSubCatagory(req, res) {
        return db
            .sub_catagory
            .create({
                id: uid.randomUUID(10),
                catagory_id: req.body.catagory_id,
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                picture: req.body.picture,
                status: req.body.status
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    }
};
