import React, { useState } from 'react';
import '../styles/login.scss';
import loginImg from "../assets/img/loginImg.png"
import Logo from '../components/logo';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';
import ErrorModal from '../components/modals/ErrorModal';
import { delay } from '../utils/utilFunc';



const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false) 
  const [Error , setError] = useState(null) 



    const [formData, setFormData] = useState({
        userName: "",
        password: "",
      });

      const closeErrorModal = () => {
        setError(null);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      

      //function to handle user login
      const HandleLogin = async(e)=>{
        e.preventDefault()
        setLoading(true)
        //delay for 1.5 seconds to simulate fetching data from the data base
        await delay(1500);
        //check if all input are filled
        if(formData.userName =='' ||  formData.password == ''){
          setLoading(false)
          setError("Kindly fill all inputs")
          return
        }
       const resp = await login(formData)
       if(resp){
        console.log("Login In Successfull")
        navigate('/');
       }else {
        setLoading(false)
        setError("Incorrect UserName and Password")
       }
      }

  return (
    <div className="auth">
        {loading &&
            <div className='loading '>
              <LoadingComponent/>
            </div>
        }
        {Error  && <ErrorModal message={Error} onClose={closeErrorModal}/>  }

        <div className='auth_con'>


            <div className="logo_con">
               <Logo/>
            </div>
            <h1>
                Log In
            </h1>
            <form className="auth_form">
                <label htmlFor="userName">userName</label>
                <input type="text"
                 id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  />

                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" name="password" 
                value={formData.password}
                  onChange={handleChange}
                  required
                />

                <Link to="/forgetpassword" className='text-left' >Forget password</Link>

                <button  onClick={HandleLogin} className='btn' type="submit">login</button>
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
