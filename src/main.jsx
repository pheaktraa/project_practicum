import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'flowbite';
import './index.css';
// import App from './App.jsx'
import ContactUS from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <ContactUS /> */}
      {/* <AboutUs /> */}
      {/* <Login /> */}
      {<SignUp/>}
    </BrowserRouter>
  </StrictMode>,
)
