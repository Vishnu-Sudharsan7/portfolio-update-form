import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a POST request to the backend endpoint
    axios
      .post('http://localhost:5000/login', { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.data === 'Login successful') {
          navigate('/page1'); // Redirect to the desired page
        } else {
          // Handle unsuccessful login
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method='post'>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <a href="next">New User?</a>
    </div>
  );
};

export default LoginForm;
