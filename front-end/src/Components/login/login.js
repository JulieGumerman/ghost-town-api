import React, { useState, useEffect } from 'react';
import './login.scss';

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

	return (
		<div>
			<form>
				<div id="login-box">
					<div className="left">
						<h1>Login</h1>

						<input type="text" name="username" placeholder="Username" />
						<input type="password" name="password" placeholder="Password" />

						<input type="submit" name="signup_submit" value="Login" />
					</div>

					<div className="right">
						<span className="loginwith">
							Sign in with<br />social network
						</span>

						<button className="social-signin facebook">Log in with facebook</button>
						<button className="social-signin twitter">Log in with Twitter</button>
						<button className="social-signin google">Log in with Google+</button>
					</div>
					<div className="or">OR</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
