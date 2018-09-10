module.exports = function (sequelize, Sequelize) {

    var partnerShopDelevery = sequelize.define('partner_shop_delevery', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        shopper_id: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        id_type: {
            type: Sequelize.STRING
        },
        id_number: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });

    partnerShopDelevery.associate = function (models) {
        partnerShopDelevery.belongsTo(models.partner_shop, {
            foreignKey: 'shopper_id',
            targetKey: 'shopper_id'
        });
    };

    return partnerShopDelevery;

}
