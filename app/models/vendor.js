module.exports = function (sequelize, Sequelize) {

    var vendor = sequelize.define('vendor', {
        vender_id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        vender_name: {
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
        supplier_person: {
            type: Sequelize.STRING
        },
        supplier_person_cell: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }

    });

    return vendor;

}
