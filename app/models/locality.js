module.exports = function (sequelize, Sequelize) {
    var locality = sequelize.define('locality', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        pincode: {
            type: Sequelize.STRING
        },
        shopper: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }
    });
    locality.associate = function (models) {
        locality.belongsTo(models.partner_shop, {
            foreignKey: 'shopper',
            targetKey: 'shopper_id'
        });
        locality.belongsTo(models.pin_code, {
            foreignKey: 'pincode',
            targetKey: 'id'
        });
    };
    return locality;
}
