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

//갓갓 시하가 알려줘서 s붙여서 살아난 내 Surf...
module.exports = Surf;