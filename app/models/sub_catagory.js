module.exports = function (sequelize, Sequelize) {

    var sub_catagory = sequelize.define('sub_catagory', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        catagory_id: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
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
    sub_catagory.associate = function (models) {
        sub_catagory.belongsTo(models.catagory, {
            foreignKey: 'catagory_id',
            targetKey: 'id'
        });
        sub_catagory.hasMany(models.products, {
            foreignKey: 'sub_catagory_id',
            targetKey: 'id'
        });
    };
    return sub_catagory;
}
