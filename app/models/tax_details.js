// tax excluded price  = item price / ((tax rate /100) + 1 )

module.exports = function (sequelize, Sequelize) {

    var tax_details = sequelize.define('tax_details', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        tax_name: {
            type: Sequelize.STRING
        },
        slab: {
            type: Sequelize.STRING
        },
        rate: {
            type: Sequelize.FLOAT
        },
        description: {
            type: Sequelize.STRING
        }

    });
    return tax_details;
}
