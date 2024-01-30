import React, { useState } from 'react';
import '../styles/login.scss';
import loginImg from "../assets/img/loginImg.png"
import Logo from '../components/logo';
import LoadingComponent from '../components/LoadingComponent';
import ErrorModal from '../components/modals/ErrorModal';
import SuccessModal from '../components/modals/SuccessModal';
import { delay } from '../utils/utilFunc';



const ResetPassword = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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



  const closeErrorModal = () => {
    setError(null);
  };


      // Function to handle user signup
  const handleResetPass = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Delay for 1.5 seconds to simulate fetching data from the database
    await delay(1500);

    //check if password length is equal or greater than 6
    if (formData.newPassword.length < 6) {
      setLoading(false);
      setError('Password must be at least 6 character');
      return;
    }

    // Check if password and confirm_password match
    if (formData.newPassword !== formData.confirmNewPassword) {
      setLoading(false);
      setError('Password and Confirm Password do not match');
      return;
    }
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="auth">
            {loading && (
            <div className="loading ">
              <LoadingComponent />
            </div>
          )}
          {error && <ErrorModal message={error} onClose={closeErrorModal} />}
          {success && <SuccessModal message="Password Changed Successfully" onClose={setSuccess} />}
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

                <button  onClick={handleResetPass}
                 className='btn' type="submit">Save</button> 
            </form>
        </div>
        <div className='authImg_con' >
            <img src={loginImg}  alt='adamant login page' />
        </div>
    </div>
  );
};

export default ResetPassword;
