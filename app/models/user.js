module.exports = function (sequelize, Sequelize) {

    var user = sequelize.define('user', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        zipcode: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.STRING
        },
        user_type: {
            type: Sequelize.STRING
        }

    });
    return user;
}
