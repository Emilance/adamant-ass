import { useState } from 'react'

import LoginPage from './pages/login'
import ChatPage from './pages/ChatPage'
import './App.scss'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/signup'
import ResetPassword from './pages/ResetPass'
import PrivateRoutes from './PrivatesRoutes'
import { AuthProvider } from './contexts/AuthContext'
import { ChatProvider } from './contexts/ChatContext'
function App() {


  return (
    <AuthProvider>

    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes/>}  >
              <Route path="/" element={
                <ChatProvider>
                    <ChatPage/>

                </ChatProvider>
              }  ></Route>
            </Route>
              <Route path="/login" element={<LoginPage/>}  ></Route>
              <Route path="/forgetpassword" element={<ResetPassword/>} ></Route>
              <Route path="/signup" element={<SignUpPage/>}  ></Route>
   
          </Routes>
      </BrowserRouter>
      
    </div>
    </AuthProvider>
  )
}

export default App
