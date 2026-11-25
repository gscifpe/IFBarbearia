module.exports = (sequelize, DataTypes) =>
    sequelize.define('Servico', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(120),
            allowNull: false,
            validate: { notEmpty: true }
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 }
        },
        duracaoMinutos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1 }
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'servicos',
        underscored: true
    })
