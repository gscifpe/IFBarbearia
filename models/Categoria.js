module.exports = (sequelize, DataTypes) =>
    sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
            validate: { notEmpty: true }
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'categorias',
        underscored: true
    })
