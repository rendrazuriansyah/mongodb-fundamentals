use('sample_order');

db.orders.insertMany([
  {
    id: 1,
    items: [
      {
        id: 1234,
        name: 'Baju Kemeja',
        price: 250000,
        quantity: 2,
      },
      {
        id: 5678,
        name: 'Celana Jeans',
        price: 350000,
        quantity: 1,
      },
    ],
    total_price: 850000,
  },
  {
    id: 2,
    items: [
      {
        id: 9876,
        name: 'Sepatu Sneakers',
        price: 500000,
        quantity: 1,
      },
      {
        id: 5432,
        name: 'Jaket Kulit',
        price: 800000,
        quantity: 1,
      },
    ],
    total_price: 1300000,
  },
  {
    id: 3,
    items: [
      {
        id: 2468,
        name: 'Tas Ransel',
        price: 200000,
        quantity: 1,
      },
      {
        id: 1357,
        name: 'Topi Baseball',
        price: 50000,
        quantity: 3,
      },
    ],
    total_price: 350000,
  },
  {
    id: 4,
    items: [
      {
        id: 8642,
        name: 'Kacamata Hitam',
        price: 150000,
        quantity: 2,
      },
      {
        id: 9753,
        name: 'Kaos Oblong',
        price: 100000,
        quantity: 5,
      },
    ],
    total_price: 800000,
  },
  {
    id: 5,
    items: [
      {
        id: 1111,
        name: 'Perhiasan Kalung',
        price: 350000,
        quantity: 1,
      },
      {
        id: 2222,
        name: 'Perhiasan Gelang',
        price: 250000,
        quantity: 2,
      },
      {
        id: 3333,
        name: 'Perhiasan Cincin',
        price: 200000,
        quantity: 3,
      },
    ],
    total_price: 1400000,
  },
]);
