// app.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Main';
import Login from './pages/Entrance';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import ProfileEditPage from './pages/ProfileEdit';
import DriverPage from './pages/Driver';
import AboutPage from './pages/About';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/arac-cagir" element={<DriverPage />} />
        <Route path="/about" element={<AboutPage />} />
        {users.map((user) => (
          <Route key={user._id} path={`/profile/${user._id}`} element={<ProfilePage id={user._id} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
