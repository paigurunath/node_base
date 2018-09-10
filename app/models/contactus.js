module.exports = function (sequelize, Sequelize) {

    var contactus = sequelize.define('contactus', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.TEXT
        }
    });

    return contactus;

}
