const Surf = (Sequelize, DataTypes) => {
    const model = Sequelize.define('pr',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(225),
            allowNull: false
        },
        symbol: {
            type: DataTypes.STRING(225),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'pr',
        freeseTableName: true
    }
    );
    return model;
}

module.export = Surf;