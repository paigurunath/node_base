const wallet = require('../models').wallet;
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
const db = require('../models');
var logger = require("../utils/logger");

module.exports = {
    processTransaction(req, res) {
        var uidid= uid.randomUUID(10);
        logger.info("In processTransaction for user ["+req.body.user_id+"] with transaction id ["+uidid+"]");
        return db
            .wallet
            .create({
                id: uidid,
                user_id: req.body.user_id,
                order_id: req.body.order_id,
                transaction_id: req.body.transaction_id,
                type: req.body.type,
                amount: req.body.amount,
                comment: req.body.comment
            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },
    getStatment(req, res) {
        logger.info("In getStatment for user ["+req.body.user_id+"] ");
        return db
            .wallet
            .findAll({
                where: {
                    "user_id": req.body.user_id
                },
                limit: req.body.limit,
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then((statment) => res.status(200).send(statment))
            .catch((error) => res.status(400).send(error));
    },
    getBalance(req, res) {
        logger.info("In getBalance for user ["+req.body.user_id+"] ");
        return db
            .sequelize
            .query('SELECT * FROM wallets_balnce_vw WHERE user_id = :user_id ', {
                replacements: {
                    user_id: req.body.user_id
                },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then((balance) => res.status(200).send(balance))
            .catch((error) => res.status(400).send(error));
    },
    checkAmountAvailable(req, res) {
        logger.info("In checkAmountAvailable for user ["+req.body.user_id+"] ");
        return db
            .sequelize
            .query(
                'select CASE WHEN balance-:amount >= 0 THEN true ELSE false END AS balance from' +
                        ' wallets_balnce_vw where user_id = :user_id ',
                {
                    replacements: {
                        user_id: req.body.user_id,
                        amount: req.body.amount
                    },
                    type: db.sequelize.QueryTypes.SELECT
                }
            )
            .then((balance) => res.status(200).send(balance))
            .catch((error) => res.status(400).send(error));
    }

};
