module.exports = function (sequelize, Sequelize) {
    var product_area_coverage = sequelize.define('product_area_coverage', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        pincode: {
            type: Sequelize.STRING
        },
        shopper_id: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });
    product_area_coverage.associate = function (models) {
        product_area_coverage.belongsTo(models.partner_shop, {
            foreignKey: 'shopper_id',
            targetKey: 'shopper_id'
        });
        product_area_coverage.belongsTo(models.pin_code, {
            foreignKey: 'pincode',
            targetKey: 'id'
        });
    };
    return product_area_coverage;
}
