module.exports = function (sequelize, Sequelize) {
    var pin_code = sequelize.define('pin_code', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        pincode: {
            type: Sequelize.STRING
        },
        officename: {
            type: Sequelize.STRING
        },
        officetype: {
            type: Sequelize.STRING
        },
        deliverystatus: {
            type: Sequelize.STRING
        },
        divisionname: {
            type: Sequelize.STRING
        },
        regionname: {
            type: Sequelize.STRING
        },
        circlename: {
            type: Sequelize.STRING
        },
        taluk: {
            type: Sequelize.STRING
        },
        districtname: {
            type: Sequelize.STRING
        },
        statename: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.STRING
        },
        related_suboffice: {
            type: Sequelize.STRING
        },
        related_headoffice: {
            type: Sequelize.STRING
        }

    }, {timestamps: false});

    return pin_code;
}
