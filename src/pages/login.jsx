import React, { useState } from 'react';
import '../styles/login.scss';
import loginImg from "../assets/img/loginImg.png"
import Logo from '../components/logo';
import { Link } from 'react-router-dom';



const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <div className="auth">
        <div className='auth_con'>


            <div className="logo_con">
               <Logo/>
            </div>
            <h1>
                Log In
            </h1>
            <form className="auth_form">
                <label htmlFor="email">Email</label>
                <input type="text"
                 id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  />

                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" name="password" 
                value={formData.password}
                  onChange={handleChange}
                />

                <Link to="/forgetpassword" className='text-left' >Forget password</Link>

                <button className='btn' type="submit">login</button>
                <Link to='/signup'>Don't have an account? Sign Up</Link >
            </form>
        </div>
        <div className='authImg_con' >
            <img src={loginImg}  alt='adamant login page' />
        </div>
    </div>
  );
};

export default LoginPage;
