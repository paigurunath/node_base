const user = require('../models').user;
var jwt = require('jsonwebtoken');
var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

module.exports = {
    getTokan(req, res) {
        if (req.body.mobile) {
            var mobile = req.body.mobile;
        }
        console.log(
            "User Mobile no is " + JSON.stringify(req.headers) + JSON.stringify(req.body)
        );
        user
            .findOne({
                where: {
                    mobile: mobile
                }
            })
            .then(function (user) {
                if (!user) {
                    res
                        .status(401)
                        .json({message: "no such user found"});
                } else {
                    if (user.mobile === req.body.mobile) {
                        var payload = {
                            id: user.id
                        };
                        var token = "bearer " + jwt.sign(payload, config.jwtSecret);
                        res.json({message: "ok", token: token});
                    } else {
                        res
                            .status(401)
                            .json({message: "mobiles did not match"});
                    }
                }
            })
            .catch(function (err) {
                console.log("Error:", err);
                res
                    .status(401)
                    .json({message: 'Something went wrong with your Signin'});
            });
    }
};
