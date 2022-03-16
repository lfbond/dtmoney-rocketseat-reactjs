import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        /* {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 10000,
          createdAt: new Date('2022-02-02 09:00:00'),
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createdAt: new Date('2022-02-14 11:00:00'),
        },

        {
          id: 3,
          title: 'Sistema Web',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 40000,
          createdAt: new Date('2022-02-18 14:00:00'),
        },

        {
          id: 4,
          title: 'Carro',
          type: 'withdraw',
          category: 'Casa',
          amount: 30000,
          createdAt: new Date('2022-03-10 10:00:00'),
        } */
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
      
      /* [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ] */
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
