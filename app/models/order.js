module.exports = function (sequelize, Sequelize) {

    var order = sequelize.define('order', {
        order_id: {
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
        payment_id: {
            type: Sequelize.STRING
        },
        delevery_date: {
            type: Sequelize.DATE
        }
    });
    order.associate = function (models) {
        order.belongsTo(models.payment_details, {
            foreignKey: 'payment_id',
            targetKey: 'id'
        });
        order.belongsTo(models.user, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
        order.belongsTo(models.partner_shop, {
            foreignKey: 'shopper_id',
            targetKey: 'shopper_id'
        });
        order.hasMany(models.order_details, {
            foreignKey: 'order_id',
            targetKey: 'order_id'
        });

    };
    return order;
}
