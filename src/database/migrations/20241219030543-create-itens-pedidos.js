'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('Itens_pedidos', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      pedido_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: { model: 'PedidosTabelas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      },
      pratos_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references:{model:'Pratos',key:'id'}
      },
      quantidade: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      preco_total: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
      }
    });
     
  },

  async down(queryInterface, Sequelize) { 
   
    await queryInterface.dropTable('Itens-pedidos');
    
  }
};
