module.exports = function (sequelize, Sequelize) {

    var payment_details = sequelize.define('payment_details', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        payment_type: {
            type: Sequelize.STRING
        },
        allowed: {
            type: Sequelize.STRING
        }
    });
    return payment_details;
}
