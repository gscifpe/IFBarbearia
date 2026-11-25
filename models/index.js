const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Cliente = require('./Cliente')(sequelize, DataTypes)
const Profissional = require('./Profissional')(sequelize, DataTypes)
const Servico = require('./Servico')(sequelize, DataTypes)
const Categoria = require('./Categoria')(sequelize, DataTypes)
const Agendamento = require('./Agendamento')(sequelize, DataTypes)
const Pagamento = require('./Pagamento')(sequelize, DataTypes)
const Avaliacao = require('./Avaliacao')(sequelize, DataTypes)

Categoria.hasMany(Servico, { foreignKey: { name: 'categoriaId', allowNull: false } })
Servico.belongsTo(Categoria, { foreignKey: { name: 'categoriaId', allowNull: false } })

Cliente.hasMany(Agendamento, { foreignKey: { name: 'clienteId', allowNull: false } })
Agendamento.belongsTo(Cliente, { foreignKey: { name: 'clienteId', allowNull: false } })

Profissional.hasMany(Agendamento, { foreignKey: { name: 'profissionalId', allowNull: false } })
Agendamento.belongsTo(Profissional, { foreignKey: { name: 'profissionalId', allowNull: false } })

Servico.hasMany(Agendamento, { foreignKey: { name: 'servicoId', allowNull: false } })
Agendamento.belongsTo(Servico, { foreignKey: { name: 'servicoId', allowNull: false } })

Agendamento.hasOne(Pagamento, { foreignKey: { name: 'agendamentoId', allowNull: false } })
Pagamento.belongsTo(Agendamento, { foreignKey: { name: 'agendamentoId', allowNull: false } })

Agendamento.hasOne(Avaliacao, { foreignKey: { name: 'agendamentoId', allowNull: false } })
Avaliacao.belongsTo(Agendamento, { foreignKey: { name: 'agendamentoId', allowNull: false } })

module.exports = {
    sequelize,
    Cliente,
    Profissional,
    Servico,
    Categoria,
    Agendamento,
    Pagamento,
    Avaliacao
}
