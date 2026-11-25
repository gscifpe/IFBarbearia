module.exports = (sequelize, DataTypes) =>
    sequelize.define('Avaliacao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1, max: 5 }
        },
        comentario: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'avaliacoes',
        underscored: true
    })
