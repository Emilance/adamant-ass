import React, { useState } from 'react';
import '../styles/login.scss';
import loginImg from "../assets/img/loginImg.png"
import Logo from '../components/logo';



const ResetPassword = () => {
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmNewPassword: "",
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
                Reset Password
            </h1>
            <form className="auth_form">
                <label htmlFor="newPassword">New Password</label>
                <input type="password" 
                id="newPassword" name="newPassword" 
                value={formData.password}
                  onChange={handleChange}
                />

             <label htmlFor="confirmNewPassword">confirmNewPassword</label>
                <input type="password" 
                id="confirmNewPassword" name="confirmNewPassword" 
                value={formData.password}
                  onChange={handleChange}
                />

                <button className='btn' type="submit">login</button> 
            </form>
        </div>
        <div className='authImg_con' >
            <img src={loginImg}  alt='adamant login page' />
        </div>
    </div>
  );
};

export default ResetPassword;
