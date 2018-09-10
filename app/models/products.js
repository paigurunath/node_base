module.exports = function (sequelize, Sequelize) {

    var products = sequelize.define('products', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        product: {
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
            type: Sequelize.FLOAT
        },
        selling_price: {
            type: Sequelize.FLOAT
        },
        vendor_id: {
            type: Sequelize.STRING
        },
        shopper_id: {
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
        },
        sub_catagory_id: {
            type: Sequelize.STRING
        },
        tax_details: {
            type: Sequelize.STRING
        }
    });
    products.associate = function (models) {
        // products.belongsTo(models.vendor, {
        //     foreignKey: 'vendor_id',
        //     targetKey: 'vender_id'
        // });
        products.belongsTo(models.user, {
            foreignKey: 'updated_by',
            targetKey: 'id'
        });
        products.belongsTo(models.tax_details, {
            foreignKey: 'tax_details',
            targetKey: 'id'
        });
        products.belongsTo(models.sub_catagory, {
            foreignKey: 'sub_catagory_id',
            targetKey: 'id'
        });
    };
    return products;
}
