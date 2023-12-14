import React, {  useState } from 'react';
import { Link} from 'react-router-dom';
import {loginApi } from '../service/authen';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      alert(JSON.stringify(formData));
      const response = await loginApi(formData);
      const userRole = response.data.role;
      console.log(userRole);
      localStorage.setItem('user', JSON.stringify(response.data));
      const accessToken = response.data.token;
      localStorage.setItem('accessToken', accessToken);
      if (accessToken) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  

  return (
    <div className="register-login-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="group-input">
                  <label htmlFor="username">Username or email address *</label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group-input">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="site-btn login-btn">
                  Sign In
                </button>
              </form>
              <div className="switch-login">
                <Link to={`/register`} className="or-login">
                  Or Create An Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
