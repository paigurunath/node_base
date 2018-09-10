module.exports = function (sequelize, Sequelize) {

    var subscriptions_details = sequelize.define('subscriptions_details', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        subscriptions_id: {
            type: Sequelize.STRING
        },
        product_id: {
            type: Sequelize.STRING
        },
        product_qty: {
            type: Sequelize.INTEGER                     
        },
        product_price: {
            type: Sequelize.FLOAT
        },
        status: {
            type: Sequelize.STRING
        },
        tax_rate: {
            type: Sequelize.STRING
        },
    });
    subscriptions_details.associate = function (models) {
        subscriptions_details.belongsTo(models.subscriptions, {
            foreignKey: 'subscriptions_id',
            targetKey: 'subscriptions_id'
        });
        subscriptions_details.belongsTo(models.products, {
            foreignKey: 'product_id',
            targetKey: 'id'
        });
        subscriptions_details.belongsTo(models.tax_details, {
            foreignKey: 'tax_rate',
            targetKey: 'id'
        });
    };
    return subscriptions_details;
}
