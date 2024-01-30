import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.scss';
import loginImg from '../assets/img/loginImg.png';
import Logo from '../components/logo';
import ErrorModal from '../components/modals/ErrorModal';
import LoadingComponent from '../components/LoadingComponent'; // Import your LoadingComponent
import { delay, setToken, setUser } from '../utils/utilFunc';
import SuccessModal from '../components/modals/SuccessModal';



const SignUpPage = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirm_password: '',
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
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Delay for 1.5 seconds to simulate fetching data from the database
    await delay(1500);

    // Check if all inputs are filled
    if (formData.email === '' || formData.password === '' || formData.name === '' || formData.confirm_password === '') {
      setLoading(false);
      setError('Kindly fill all inputs');
      return;
    }
    //check if password length is equal or greater than 6
    if (formData.password.length < 6) {
      setLoading(false);
      setError('Password must be at least 6 character');
      return;
    }

     
    // Check if password and confirm_password match
    if (formData.password !== formData.confirm_password) {
      setLoading(false);
      setError('Password and Confirm Password do not match');
      return;
    }
    setLoading(false);
    setSuccess(true);
    setToken("abcdefghij")
    
    await setUser({
      name, email
    })
  };
  
  
  const closeandNavigate =  (param) => {
    setSuccess(param)
     navigate('/');
  }

  return (
    <div className="auth">
      {loading && (
        <div className="loading ">
          <LoadingComponent />
        </div>
      )}
      {error && <ErrorModal message={error} onClose={closeErrorModal} />}
      {success && <SuccessModal message="Account Created Successfully " onClose={closeandNavigate} />}

      <div className="auth_con">
        <div className="logo_con">
          <Logo />
        </div>
        <h1>Sign Up</h1>
        <form className="auth_form" onSubmit={handleSignUp}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />

          <button className="btn" type="submit">
            Sign Up
          </button>
          <Link to="/login">Already have an account? Log In</Link>
        </form>
      </div>
      <div className="authImg_con">
        <img src={loginImg} alt="adamant login page" />
      </div>
    </div>
  );
};

export default SignUpPage;
