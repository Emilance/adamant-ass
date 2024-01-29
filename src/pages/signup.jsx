import React, { useState } from 'react';
import '../styles/login.scss';
import loginImg from "../assets/img/loginImg.png"
import Logo from '../components/logo';
import { Link } from 'react-router-dom';



const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name : '',
        confirm_password:''
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
                Sign Up
            </h1>
            <form className="auth_form">
                <label htmlFor="email">Email</label>
                <input type="text"
                 id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  />

                 <label htmlFor="name">Name</label>
                <input type="text"
                 id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  />

                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" name="password" 
                value={formData.password}
                  onChange={handleChange}
                />

                 <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" 
                id="confirm_password" name="confirm_password" 
                value={formData.password}
                  onChange={handleChange}
                />


                <button className='btn' type="submit">SIgn Up</button>
                <Link to="/login">Already have an account? Log In</Link>
            </form>
        </div>
        <div className='authImg_con' >
            <img src={loginImg}  alt='adamant login page' />
        </div>
    </div>
  );
};

export default SignUpPage;
