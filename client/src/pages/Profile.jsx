import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Profile = ({ id }) => {
  
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch('/api/trips')
      .then(response => response.json())
      .then(data => setTrips(data));
  }, []);

  const location = useLocation();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    if (location.state && location.state.selectedDriver) {
      const selectedDriver = location.state.selectedDriver;
      setDriver(selectedDriver);
    } else {
      // Eğer seçili sürücü bilgisi yoksa, API'yi kullanarak sürücü bilgilerini getirin
      fetch('/api/driver/' + location.pathname.split('/').pop())
        .then(response => response.json())
        .then(data => setDriver(data));
    }
  }, [location]);



  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleDeleteAccount = () => {
    axios
      .delete(`/api/users/${id}`)
      .then((response) => {
        alert('Hesap başarıyla silindi');
        navigate('/');
        console.log(response.data.message);
        // Hesap başarıyla silindi, ilgili işlemleri yapabilirsiniz
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEditProfile = () => {
    setUpdatedUser(user);
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    axios
      .put(`/api/users/${id}`, updatedUser)
      .then((response) => {
        setUser(updatedUser);
        setEditMode(false);
        console.log('Profil güncellendi:', response.data);
        // Profil başarıyla güncellendi, ilgili işlemleri yapabilirsiniz
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mx-auto w-full'>
      <UserNavbar />
      <div>
        <div className='flex flex-col'>
          <div className='flex flew-row mx-auto mt-10 p-10'>
            <div className='flex flex-col'>
              <img
                className='w-48 h-48 rounded-full'
                src={user.imageURL}
                alt='Rounded avatar'
              />
              <div className='px-4 py-6 sm:px-0'>
                <dt className='text-sm text-center font-medium leading-6 text-gray-900'>
                  Kullanıcı
                </dt>
              </div>
            </div>
            <div className='flex flex-col ml-20'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm font-medium leading-6 text-gray-900'>
                  İsim Soyisim
                </dt>
                {editMode ? (
                  <input
                    type='text'
                    name='name'
                    value={updatedUser.name || ''}
                    onChange={handleChange}
                    className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'
                  />
                ) : (
                  <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {user.name}
                  </dd>
                )}
              </div>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm font-medium leading-6 text-gray-900'>
                  E-mail
                </dt>
                {editMode ? (
                  <input
                    type='email'
                    name='email'
                    value={updatedUser.email || ''}
                    onChange={handleChange}
                    className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'
                  />
                ) : (
                  <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {user.email}
                  </dd>
                )}
              </div>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm font-medium leading-6 text-gray-900'>
                  Parola
                </dt>
                {editMode ? (
                  <input
                    type='password'
                    name='password'
                    value={updatedUser.password || ''}
                    onChange={handleChange}
                    className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'
                  />
                ) : (
                  <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    ************
                  </dd>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative overflow-x-auto mt-10 w-full'>
        <table className='mx-auto text-sm text-left text-gray-500 rounded-md'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-800'>
            <tr>
              <th scope='col' className='px-6 py-3 text-white'>
                Sürücü
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Araç Tipi
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Fiyat
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Kalkış Konum
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Varış Konum
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Tarih
              </th>
            </tr>
          </thead>
          <tbody>
          {trips.map((trip) => (
            <tr className='border-b border-gray-200'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50'
              >
                {trip.driver}
              </th>
              <td className='px-6 py-4'>{trip.car_type}</td>
              <td className='px-6 py-4 bg-gray-50'>{trip.amount}</td>
              <td className='px-6 py-4 bg-gray-50'>{trip.departureLocation}</td>
              <td className='px-6 py-4 bg-gray-50'>{trip.arrivalLocation}</td>
              <td className='px-6 py-4 bg-gray-50'>{trip.date}</td>
            </tr>
               ))}
          </tbody>
          
        </table>
      </div>
      <div className='w-full mx-auto flex justify-center mt-4'>
        <button
          type='button'
          onClick={handleDeleteAccount}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
        >
          Hesabı sil
        </button>
        {editMode ? (
          <button
            type='button'
            onClick={handleSaveProfile}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2'
          >
            Profili Kaydet
          </button>
        ) : (
          <button
            type='button'
            onClick={handleEditProfile}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2'
          >
            Bilgileri Düzenle
          </button>
        )}
      </div>

    </div>
  );
};

export default Profile;
