import React, { useState } from 'react';
import './login.scss';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
	const credentials = {
		username: '',
		password: ''
	};

	const [ login, setLogin ] = useState(credentials);

	const handleChange = (e) => {
		e.persist();
		setLogin({
			...login,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
		.post('/login', login)
		.then(res => {
			localStorage.setItem('token', res.data.payload);
			props.history.push('/map-overview')
			console.log(res)
		});
	};

	return (
		<div>
			<form>
				<div id="login-box">
					<div className="left">
						<h1>Login</h1>

						<input 
						type="text" 
						name="username" 
						placeholder="Username" 
						onChange={handleChange}
						value={login.username}
						/>

						<input 
						type="password" 
						name="password" 
						placeholder="Password" 
						onChange={handleChange}
						value={login.password} 
						/>

						<input 
						type="submit" 
						name="signup_submit" 
						value="Login" 
						onClick={handleSubmit}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
