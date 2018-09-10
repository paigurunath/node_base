module.exports = function (sequelize, Sequelize) {

    var partnerShop = sequelize.define('partner_shop', {
        shopper_id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        shopper_name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        aggreement_no: {
            type: Sequelize.STRING
        },
        contact_person: {
            type: Sequelize.STRING
        },
        contact_person_cell: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        buildings_coverage: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });

    return partnerShop;

}
