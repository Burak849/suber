// server.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://burak:burak123.@suber.nqzo9fx.mongodb.net/suber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });

// JSON verileri için body-parser kullanımı
app.use(bodyParser.json());

// User modeli
const User = mongoose.model('User', {
  name: String,
  lastName: String,
  imageURL: String,
  email: String,
  username: String,
  password: String,
  confirm_password: String
});
const Trip = mongoose.model('Trip', {
  driver: String,
  car_type: String,
  amount: String,
  departureLocation: String,
  arrivalLocation: String,
  date: String
});
const Driver = mongoose.model('Driver', {
  name: String,
  lastName: String,
  car_type: String,
  plaka: String,
  google_token: String
});

app.use(express.json());


// Trips
app.get('/api/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

// Drivers
app.get('/api/drivers', async (req, res) => {
  try {
    const driver = await Driver.find();
    res.json(driver);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});









// 

// api/users endpoint'i
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
// silme ve düzenleme
app.delete('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    res.json({ message: 'Hesap başarıyla silindi' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

app.put('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

