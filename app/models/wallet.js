module.exports = function (sequelize, Sequelize) {

    var wallet = sequelize.define('wallet', {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.STRING
        },
        order_id: {
            type: Sequelize.STRING
        },
        transaction_id: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.FLOAT
        },
        comment: {
            type: Sequelize.STRING
        }
    });

    wallet.associate = function (models) {
        wallet.belongsTo(models.user, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
    };

    return wallet;
}
