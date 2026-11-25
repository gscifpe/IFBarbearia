module.exports = (sequelize, DataTypes) =>
    sequelize.define('Cliente', {
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
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: true,
            unique: true,
            validate: { len: [11, 14] }
        },
        dataNascimento: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'clientes',
        underscored: true
    })
