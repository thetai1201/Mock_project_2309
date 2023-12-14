import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../service/authen';

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registerData.username || !registerData.password || !registerData.email || !registerData.phoneNumber) {
      alert('Please fill in all registration fields.');
      return;
    }

    try {
      alert(JSON.stringify(registerData));
      const response = await registerApi(registerData);

      console.log('Registration successful', response.data);

      setRegistrationSuccess(true);

      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-login-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="register-form">
              <h2>Register</h2>
              {registrationSuccess && <p>Registration successful! You can now log in.</p>}
              <form onSubmit={handleSubmit}>
                <div className="group-input">
                  <label htmlFor="username">Username *</label>
                  <input
                    type="text"
                    id="username"
                    value={registerData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group-input">
                  <label htmlFor="email">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    value={registerData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group-input">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={registerData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group-input">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    value={registerData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="site-btn register-btn">
                  REGISTER
                </button>
              </form>
              <div className="switch-login">
                <Link to={`/login`} className="or-login">
                  Or Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
