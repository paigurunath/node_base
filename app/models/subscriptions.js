module.exports = function (sequelize, Sequelize) {

    var Subscriptions = sequelize.define('subscriptions', {
        subscriptions_id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.STRING
        },
        shopper_id: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        freqency: {
            type: Sequelize.STRING
        },
        subscriptions_start_date: {
            type: Sequelize.DATE
        }
    });
    Subscriptions.associate = function (models) {
        Subscriptions.belongsTo(models.user, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
        Subscriptions.belongsTo(models.partner_shop, {
            foreignKey: 'shopper_id',
            targetKey: 'shopper_id'
        });
        Subscriptions.hasMany(models.subscriptions_details, {
            foreignKey: 'subscriptions_id',
            targetKey: 'subscriptions_id'
        });
    };
    return Subscriptions;

}
