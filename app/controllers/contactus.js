var logger = require("../utils/logger");
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
const contactus = require('../models').contactus;
const emailController = require('../email/emailController.js');

module.exports = {
    create(req, res) {
        console.log("request is " + JSON.stringify(req.body));
        return contactus
            .create(
                {id: uid.randomUUID(10), type: req.body.type, mobile: req.body.mobile, email: req.body.email, message: req.body.message}
            )
            .then((contactus) => res.status(201).send(contactus))
            .catch((error) => res.status(400).send(error));
    },

    listAll(req, res) {
        return contactus
            .findAll()
            .then((contactus) => res.status(200).send(contactus))
            .catch((error) => res.status(400).send(error));
    },

    getByType(req, res) {
        logger.info("entry contactus getByType");
        emailController.sendInvoice({"username": 'Nilesh'});
        return contactus
            .findAll({
                where: {
                    type: req.body.type
                }
            })
            .then((contactus) => {
                if (!contactus) {
                    return res
                        .status(404)
                        .send({message: 'contactus Not Found'});
                }
                return res
                    .status(200)
                    .send(contactus);
            })
            .catch((error) => res.status(400).send(error));
    }
};
