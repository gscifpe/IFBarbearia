module.exports = (sequelize, DataTypes) =>
    sequelize.define('Profissional', {
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
        email: {
            type: DataTypes.STRING(160),
            allowNull: true,
            unique: true,
            validate: { isEmail: true }
        },
        telefone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        especialidade: {
            type: DataTypes.STRING(120),
            allowNull: true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'profissionais',
        underscored: true
    })
