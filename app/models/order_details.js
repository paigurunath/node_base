module.exports = function (sequelize, Sequelize) {

    var order_details = sequelize.define('order_details', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        order_id: {
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

    order_details.associate = function (models) {
        order_details.belongsTo(models.order, {
            foreignKey: 'order_id',
            targetKey: 'order_id'
        });
        order_details.belongsTo(models.products, {
            foreignKey: 'product_id',
            targetKey: 'id'
        });
        order_details.belongsTo(models.tax_details, {
            foreignKey: 'tax_rate',
            targetKey: 'id'
        });
    };
    return order_details;

}
