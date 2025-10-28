const express = require('express');
const app = express();
const port = 8000;

// Data MotoGP
var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

// Route utama
app.get('/', (req, res) => {
  res.json(motoGP);
});

// Route country
app.get('/country', (req, res) => {
  const grouped = {};
  motoGP.forEach(item => {
    const country = item.winner.country;
    if (!grouped[country]) grouped[country] = [];
    grouped[country].push({
      circuit: item.circuit,
      location: item.location,
      winner: `${item.winner.firstName} ${item.winner.lastName}`
    });
  });
  res.json(grouped);
});

// Route name
app.get('/name', (req, res) => {
  const grouped = {};
  motoGP.forEach(item => {
    const fullName = `${item.winner.firstName} ${item.winner.lastName}`;
    if (!grouped[fullName]) grouped[fullName] = [];
    grouped[fullName].push({
      circuit: item.circuit,
      location: item.location,
      country: item.winner.country
    });
  });
  res.json(grouped);
});

// Bad Request
app.use((req, res) => {
  res.status(404).send('Bad Request');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
