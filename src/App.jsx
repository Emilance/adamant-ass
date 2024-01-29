import { useState } from 'react'

import LoginPage from './pages/login'
import ChatPage from './pages/ChatPage'
import './App.scss'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/signup'
import ResetPassword from './pages/ResetPass'
import PrivateRoutes from './PrivatesRoutes'
function App() {


  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes/>}  >
              <Route path="/" element={<ChatPage/>}  ></Route>
            </Route>
              <Route path="/login" element={<LoginPage/>}  ></Route>
              <Route path="/forgetpassword" element={<ResetPassword/>} ></Route>
              <Route path="/signup" element={<SignUpPage/>}  ></Route>
   
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
