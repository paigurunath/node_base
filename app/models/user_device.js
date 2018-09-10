module.exports = function (sequelize, Sequelize) {

    var user_device = sequelize.define('user_device', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        uuid :{
            type: Sequelize.STRING
        },
        cordova : {
            type: Sequelize.STRING
        },
        platform: {
            type: Sequelize.STRING
        },
        version : {
            type: Sequelize.STRING
        },
        manufacturer : {
            type: Sequelize.STRING
        },
        isvirtual : {
            type: Sequelize.STRING
        },
        serial : {
            type: Sequelize.STRING
        },
        imei : {
            type: Sequelize.STRING
        },
        imsi : {
            type: Sequelize.STRING
        },
        iccid : {
            type: Sequelize.STRING
        },
        mac_addr : {
            type: Sequelize.STRING
        }

    });
    user_device.associate = function (models) {
        user_device.belongsTo(models.user, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
    };
    return user_device;
}
