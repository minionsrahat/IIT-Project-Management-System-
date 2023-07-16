import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';
import { useState } from 'react';
import axios from 'axios';
import ErrorModal from './components/ErrorModal';
import { useDispatch } from 'react-redux';
import { openModal } from './features/common/modalSlice';
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from './utils/globalConstantUtil'
// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))
const Documentation = lazy(() => import('./pages/Documentation'))


// Initializing different libraries
initializeApp()


// Check for login and initialize axios
const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])

  const [error, setError] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    // Set up Axios interceptors
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {

        console.log(error.response.data.error)
        if (error.response.status === 500) {
          dispatch(openModal({title : "Error", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW,error:true,errormsg:error.response.data.message}))
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Clean up interceptors
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const closeModal = () => {
    setError(null);
  };


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />} />

        </Routes>
      </Router>

      {/* Render the modal when there is an error */}
      {error && <ErrorModal message={error} onClose={closeModal}></ErrorModal>}


    </>
  )
}

export default App
