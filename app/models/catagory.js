module.exports = function (sequelize, Sequelize) {

    var catagory = sequelize.define('catagory', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        catagory_name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        picture: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });
    return catagory;
}
