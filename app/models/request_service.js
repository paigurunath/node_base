module.exports = function (sequelize, Sequelize) {

    var requestService = sequelize.define('request_service', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        building: {
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
        },
        nearest_milk_store: {
            type: Sequelize.TEXT
        },
        milk_store_contact: {
            type: Sequelize.TEXT
        }
    });

    return requestService;

}
