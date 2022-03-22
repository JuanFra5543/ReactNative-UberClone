module.exports = (sequelize, Sequelize) => {
    const Favourite = sequelize.define("favourites", {
        icon: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        destination: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return Favourite;
};