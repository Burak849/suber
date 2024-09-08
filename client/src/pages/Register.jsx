import React from 'react'
import Navbar from '../components/Navbar'


function Register() {
    return (
      <div>
        <Navbar />
        <div className='w-full flex flex-row justify-evenly items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className="">
          <div className="flex flex-col">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-12 space-y-4 md:space-y-12 sm:p-24">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create your account 
                </h1>
                <form className="space-y-4 md:space-y-6">
                    
<label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Resim yükle</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " aria-describedby="file_input_help" id="file_input" type="file"/>
<p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                  </div>
                  <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                    <input type="text" name="username" id="username" placeholder="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                  </div>
                  <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Şifre</label>
                    <input type="text" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                  </div>
                  <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Şifre tekrarı</label>
                    <input type="text" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                  </div>
                  <button type="button"  className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-400 mb-5">Register</button>
                
                  <a className="text-xs pt-5" href="/reset-password">Hesabınız varsa giriş yapın</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </div>
  
    )
  }
  
  export default Register