import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:8080/auth/login";

const Login: React.FC = () => {

  let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const staticUsers = { username: 'john', password: '123'};

    const staticUsersString = JSON.stringify(staticUsers);

    sessionStorage.setItem('staticUsers', staticUsersString);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Perform login logic here with credentials.email and credentials.password
        console.log('Email:', username);
        console.log('Password:', password);

        // axios.post(baseURL, {
        //   user_name: {username},
        //   password: {password}
        // })
        // .then(response => {
        //   // Handle successful login response
        //   const token = response.data.token;
        //   console.log(token);
        //   // Store the token in local storage or other secure storage
        // })
        // .catch(error => {
        //   // Handle login error
        //   console.log(error);
        // });

        const staticUsersString = sessionStorage.getItem('staticUsers');

        if(staticUsersString !== null) {
          const staticUsers = JSON.parse(staticUsersString);
        }else{
          const staticUsers = [];
        }

        console.log(staticUsers);

        if(username == "Sameeha" && password == "1234"){
            navigate('/dashboard');
        }else if(username === staticUsers.username && password === staticUsers.password){
          navigate('/dashboard');
          sessionStorage.setItem("loggedIn", true.toString());
        }
        // Reset form fields
        setUsername('');
        setPassword('');
      };

      const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
      };

      const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      }

  return (
    <div className='center'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='input-container'>
            <label>Username</label>
            <input 
            type="username" 
            name="username" 
            value={username} 
            onChange={handleUsernameChange}
            required
            />
            </div>
            <div className='input-container'>
            <label>Password</label>
            <input 
            type="password"
            name="password"
            value={password} 
            onChange={handlePasswordChange}
            required/>
            </div>
            <button type="submit" className="button">Submit</button>
            <div className="signup_link">
            Not a member? <a href="#">Signup</a>
            </div>
        </form>

    </div>
    
  );
};

export default Login;
