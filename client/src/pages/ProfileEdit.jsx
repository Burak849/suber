import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';

const ProfileEditPage = ({ id }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setName(data.name);
        setLastName(data.lastName);
        setImageURL(data.imageURL);
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
      });
  }, [id]);

  const handleSubmit = () => {
    const updatedUser = {
      name,
      lastName,
      imageURL,
      username,
      email,
      password
    };

    fetch(`/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => {
        if (response.ok) {
          alert('Başarıyla güncellendi');
          navigate('/profile');
        } else {
          alert('Bir sorun oluştu. Lütfen tekrar deneyin');
          console.error('Kullanıcı güncellenirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
      });
  };

  return (
    <div>
      <UserNavbar />
      <div className='w-full flex flex-row justify-evenly items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className=''>
          <div className='flex flex-col'>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
              <div className='p-12 space-y-4 md:space-y-12 sm:p-24'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                  Profil Güncelle
                </h1>
                <form className='space-y-4 md:space-y-6'>
                  <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='file_input'>
                    Resim güncelle
                  </label>
                  <input
                    className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50'
                    id='file_input'
                    type='file'
                    aria-describedby='file_input_help'
                    value={imageURL}
                    onChange={e => setImageURL(e.target.value)}
                  />
                  <p className='mt-1 text-sm text-gray-500' id='file_input_help'>
                    SVG, PNG, JPG veya GIF (MAX. 800x400 piksel).
                  </p>

                  <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='name@company.com'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900'>
                      Username
                    </label>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                      placeholder='username'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>
                      Şifre
                    </label>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                      placeholder='Şifre'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type='button'
                    onClick={handleSubmit}
                    className='w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-400 mb-5'
                  >
                    Güncelle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
