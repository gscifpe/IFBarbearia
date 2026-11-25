module.exports = (sequelize, DataTypes) =>
    sequelize.define('Agendamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dataHora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(
                'agendado',
                'confirmado',
                'concluido',
                'cancelado',
                'faltou'
            ),
            allowNull: false,
            defaultValue: 'agendado'
        },
        observacoes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'agendamentos',
        underscored: true
    })
