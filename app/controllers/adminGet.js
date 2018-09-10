var logger = require("../utils/logger");
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
const db = require('../models');

module.exports = {
    getProductbyId(req, res) {
        return db
            .products
            .findAll({
                where: {
                    "id": req.body.id,
                    "status": "active"
                }
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },
    getProductbyBrand(req, res) {
        return db
            .products
            .findAll({
                where: {
                    "brand": req.body.brand,
                    "status": "active"
                }
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },
    getProductbysubCatagory(req, res) {
        return db
            .products
            .findAll({
                where: {
                    "sub_catagory_id": req.body.sub_catagory_id,
                    "status": "active"
                }
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },
    getProductbyproductType(req, res) {
        return db
            .products
            .findAll({
                where: {
                    "product": req.body.product,
                    "status": "active"
                }
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },
    getVendor(req, res) {
        return db
            .vendor
            .findAll({
                where: {
                    "vender_id": req.body.vendor_id,
                    "status": "active"
                }
            })
            .then((vendor) => res.status(201).send(vendor))
            .catch((error) => res.status(400).send(error));
    },
    getAllVendor(req, res) {
        return db
            .vendor
            .findAll()
            .then((vendor) => res.status(201).send(vendor))
            .catch((error) => res.status(400).send(error));
    },
    getSubscription(req, res) {
        return db
            .subscriptions
            .findAll({
                where: {
                    "user_id": req.body.user_id,
                    "status": "active"
                },
                include: [
                    {
                        model: db.subscriptions_details,
                        where: {
                            "status": "active"
                        }
                    }
                ]
            }) // in case filtered result
            .then((subscriptions) => res.status(200).send(subscriptions))
            .catch((error) => res.status(400).send(error));
    },
    getAllSubscriptions(req, res) {
        console.log("request recieved")
        return db
            .subscriptions
            .findAll() // in case filtered result
            .then((subscriptions) => res.status(200).send(subscriptions))
            .catch((error) => res.status(400).send(error));
    },
    getOrderbyUser(req, res) {
        return db
            .order
            .findAll({
                where: {
                    "user_id": req.body.user_id,
                    "status": "active"
                },
                include: [
                    {
                        model: db.order_details,
                        where: {
                            "status": "active"
                        }
                    }
                ]
            }) // in case filtered result
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },
    getAllOrders(req, res) {
        return db
            .order
            .findAll() // in case filtered result
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },
    getOrderbyId(req, res) {
        return db
            .order
            .findAll({
                where: {
                    "order_id": req.body.order_id,
                    "status": "active"
                },
                include: [
                    {
                        model: db.order_details,
                        where: {
                            "status": "active"
                        }
                    }
                ]
            }) // in case filtered result
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },
    getProductByVendor(req, res) {
        return db
            .products
            .findAll({
                where: {
                    "vendor_id": req.body.vendor_id,
                    "status": "active"
                }
            })
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },
    getProductByshopper(req, res) {
        return db
            .products
            .findAll({
                where: {
                    "shopper_id": req.body.shopper_id,
                    "status": "active"
                }
            })
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },
    getPinCodeById(req, res) {
        var pinlist = req.body;
        db
            .pin_code
            .findAll({
                where: {
                    "id": req.body.id
                }
            })
            .then((pin) => res.status(201).send(pin))
            .catch((error) => res.status(400).send(error));
    },
    getPinCodeByCode(req, res) {
        db
            .pin_code
            .findAll({
                where: {
                    "pincode": req.body.pincode
                }
            })
            .then((pin) => res.status(201).send(pin))
            .catch((error) => res.status(400).send(error));
    },
    getShopperById(req, res) {
        return db
            .partner_shop
            .findAll({
                where: {
                    "shopper_id": req.body.shopper_id,
                    "status": "active"
                }
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    getAllShoppers(req, res) {
        return db
            .partner_shop
            .findAll()
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    getShopperByName(req, res) {
        return db
            .partner_shop
            .findAll({
                where: {
                    "shopper_name": req.body.shopper_name,
                    "status": "active"
                }
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    getAllSubscriptionsProduct(req, res) {
        console.log("====> Got data 1");
        return db
            .products
            .findAll({
                where: {
                    "subscriptions_allowed": "true"
                }
            })
            .then(function (allproducts) {
                var promises = [];
                promises.push(getFilterData('quantity'));
                promises.push(getFilterData('type'));
                promises.push(getFilterData('product'));
                promises.push(getFilterData('brand'));
                function getFilterData(key) {
                    return new Promise(function (fulfill, reject) {
                        // db.products.findAll({where: {"status": "active"},attributes:
                        // [[db.sequelize.fn('DISTINCT', db.sequelize.col(key)),"failedids"],"id"]})
                        db
                            .products
                            .aggregate(key, 'DISTINCT', {plain: false})
                            .then((filter) => {
                                data = {
                                    "name": key
                                        .charAt(0)
                                        .toUpperCase() + key.substr(1),
                                    "values": filter
                                }
                                fulfill(data)
                            })
                            .catch((error) => reject(error));
                    });
                }
                Promise
                    .all(promises)
                    .then((filters) => {
                        var data = {
                            "products": allproducts,
                            "finalProducts": filters
                        }
                        res
                            .status(200)
                            .send(data)
                    })
                    .catch((error) => {
                        console.log(error);
                        res
                            .status(400)
                            .send(error)
                    })
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    getAllInstaProduct(req, res) {
        console.log("====> Got data 1");
        return db
            .products
            .findAll()
            .then(function (allproducts) {
                var promises = [];
                promises.push(getFilterData('quantity'));
                promises.push(getFilterData('type'));
                promises.push(getFilterData('product'));
                promises.push(getFilterData('brand'));
                function getFilterData(key) {
                    return new Promise(function (fulfill, reject) {
                        // db.products.findAll({where: {"status": "active"},attributes:
                        // [[db.sequelize.fn('DISTINCT', db.sequelize.col(key)),"failedids"],"id"]})
                        db
                            .products
                            .aggregate(key, 'DISTINCT', {plain: false})
                            .then((filter) => {
                                data = {
                                    "name": key
                                        .charAt(0)
                                        .toUpperCase() + key.substr(1),
                                    "values": filter
                                }
                                fulfill(data)
                            })
                            .catch((error) => reject(error));
                    });
                }
                Promise
                    .all(promises)
                    .then((filters) => {
                        var data = {
                            "products": allproducts,
                            "finalProducts": filters
                        }
                        res
                            .status(200)
                            .send(data)
                    })
                    .catch((error) => {
                        console.log(error);
                        res
                            .status(400)
                            .send(error)
                    })
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    getTax(req, res) {
        db
            .tax_details
            .findAll({
                where: {
                    "id": req.body.id
                }
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));

    },
    getCatagory(req, res) {
        db
            .catagory
            .findAll({
                where: {
                    "id": req.body.id
                }
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    getSubCatagory(req, res) {
        db
            .sub_catagory
            .findAll({
                where: {
                    "id": req.body.id
                }
            })
            .then((responseData) => res.status(201).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    getOrderInvoice(req, res) {
        //NetPrice  = SellingPrice / ((taxRate /100) + 1 )
        // tex = SellingPrice-NetPrice
        return db
            .sequelize
            .query('SELECT * FROM order_invoice_vw WHERE order_id = :order_id ', {
                replacements: {
                    order_id: req.body.order_id
                },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then((balance) => res.status(200).send(balance))
            .catch((error) => res.status(400).send(error));
    },
    getSubscriptionsInvoice(req, res) {
        return db
            .sequelize
            .query('SELECT * FROM subscriptions_invoice_vw WHERE subscriptions_id = :subscriptions_id ', {
                replacements: {
                    subscriptions_id: req.body.subscriptions_id
                },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then((balance) => res.status(200).send(balance))
            .catch((error) => res.status(400).send(error));
    },
    getAllCategory(req, res) {
        db
            .catagory
            .findAll()
            .then((responseData) => res.status(200).send(responseData))
            .catch((error) => res.status(400).send(error));
    },
    checkPinCovarge(req, res) {
        db
            .sequelize
            .query('select a.id, a.shopper_id, b.officename, b.pincode  from public.product_area_coverages a, public.pin_codes b where a.pincode=b.id and b.pincode=:pincode and a.status=\'active\'', {
                replacements: {
                    pincode: req.body.pincode
                },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(function(responseData){
                console.log(responseData)
                console.log(JSON.stringify(responseData))
                res.status(200).send(responseData)})
            .catch((error) => res.status(400).send(error));
    },
};
