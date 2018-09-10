const user = require('../models').user;
const user_device = require('../models').user_device;
var ShortUniqueId = require('short-unique-id');
var uid = new ShortUniqueId();
var logger = require("../utils/logger");

module.exports = {
    signupUser(req, res) {
        return user
            .create({
                id: uid.randomUUID(10),
                username: req.body.username,
                address: req.body.address,
                zipcode: req.body.zipcode,
                email: req.body.email,
                mobile: req.body.mobile,
                role: req.body.role,
                status: req.body.status,
                user_type:req.body.user_type
            })
            .then((user) => {
                user_device.create({
                    id: uid.randomUUID(10),
                    uuid :req.body.device.uuid,
                    cordova : req.body.device.cordova,
                    platform: req.body.device.platform,
                    version :req.body.device.version,
                    manufacturer : req.body.device.manufacturer,
                    isvirtual : req.body.device.isvirtual,
                    serial : req.body.device.serial,
                    imei :req.body.device.imei,
                    imsi : req.body.device.imsi,
                    iccid :req.body.device.iccid,
                    mac_addr : req.body.device.mac_addr,
                    user_id:user.id
                })
                .then((user) => 
                    res.status(201).send(user)
                )
                .catch((user) => res.status(400).send(error));
            })
            .catch((user) => res.status(400).send(error));
    },
    getUserByMobile(req, res) {
        console.log("getting user details");
        return user
            .findAll({
                where: {
                    mobile: req.body.mobile
                }
            })
            .then((user) => {
                
                return res
                    .status(200)
                    .send(user);
            })
            .catch((error) => res.status(400).send(error));
    },
    updateUser(req, res) {
        return user
            .findById(req.body.id)
            .then(user => {
                if (!user) {
                    return res
                        .status(404)
                        .send({message: 'User Not Found'});
                }
                return user
                    .update(
                        {address: req.body.address, email: req.body.email, mobile: req.body.mobile}
                    )
                    .then(() => res.status(200).send(user))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }

};
