import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Col, Row } from 'antd';
import { GOOGLE_CLIENT_ID } from "./constants/environment";
import UserProvider from "./providers/UserProvider";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <UserProvider>
      <ToastContainer />
      <Col>
          <Navbar />
          <Col style={{ marginTop: 200 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </Col>
        </Col>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
