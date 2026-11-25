module.exports = (sequelize, DataTypes) =>
    sequelize.define('Pagamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 }
        },
        metodo: {
            type: DataTypes.ENUM(
                'dinheiro',
                'pix',
                'cartao_credito',
                'cartao_debito'
            ),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('pendente', 'pago', 'cancelado', 'estornado'),
            allowNull: false,
            defaultValue: 'pendente'
        },
        dataPagamento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        referencia: {
            type: DataTypes.STRING(120),
            allowNull: true
        }
    }, {
        tableName: 'pagamentos',
        underscored: true
    })
