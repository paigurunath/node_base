module.exports = function (sequelize, Sequelize) {

    var products_history = sequelize.define('products_history', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        product_id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        product_type: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.STRING
        },
        mrp: {
            type: Sequelize.STRING
        },
        selling_price: {
            type: Sequelize.STRING
        },
        vendor_id: {
            type: Sequelize.STRING
        },
        feature: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        web_address: {
            type: Sequelize.STRING
        },
        container: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        updated_by: {
            type: Sequelize.STRING
        },
        subscriptions_allowed: {
            type: Sequelize.STRING
        }

    });
    products_history.associate = function (models) {
        products_history.belongsTo(models.products, {
            foreignKey: 'product_id',
            targetKey: 'id'
        });
    };
    return products_history;
}
