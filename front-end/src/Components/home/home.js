import React, { useState, useEffect } from 'react';
import CarPic from '../../Images/Car.jpg';
import GhostTownPic1 from '../../Images/ghostTownHome1.jpg';
import './home.scss';
import axios from 'axios';

const Home = (props) => {
	const credentials = {
		username: '',
		password: ''
	};

	const [ register, setRegister ] = useState(credentials);

	const handleChange = (e) => {
		e.persist();
		setRegister({
			...register,
			[e.target.name]: e.target.value
		});
	};

	const submitRegister = (e) => {
		e.preventDefault();
		axios
		.post('https://ghost-town-project.herokuapp.com/api/register', register)
		.then(res => {
			//localStorage.setItem('token', res.data.payload);
			props.history.push('/login')
			console.log(res.data)
		})
	};

	const goToLogin = (e) => {
		e.preventDefault();
		props.history.push('/login');
	};

	useEffect(() => {
		axios
		.get('https://ghost-town-project.herokuapp.com/api/locations')
		.then(res => {
			console.log(res.data)
		})
	})

	return (
		<div className="Home">
			<div className="top-content">
				<div className="titles">
					<h1>Welcome To Ghost Town Locator</h1>
					<h2>Midwest Edition</h2>
					<h2>The place to locate and share ghost towns around the midwest</h2>
				</div>

				<div className="signup">
					<form>
						<div id="login-box">
							<div className="left">
								<h1>Register</h1>

								<input 
								type="text" 
								name="username" 
								placeholder="Username" 
								onChange={handleChange}
								value={register.username}
								/>

								<input 
								type="password" 
								name="password"
								placeholder="Password" 
								onChange={handleChange}
								value={register.password}
								/>

								<div className="login-register">

									<input 
									type="submit" 
									name="signup_submit" 
									value="Register" 
									id="register-btn" 
									onClick={submitRegister}
									/>

									<input 
									type="submit" 
									name="signup_submit" 
									value="Login" 
									id="login-btn"
									onClick={goToLogin} 
									/>
								</div>
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
			</div>

			<div className="paragraph1">
				<div className="paragraph-top">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className="pics1">
					<img src={CarPic} alt="car-pic" />
					<img src={GhostTownPic1} alt="ghost-town"/>
				</div>
			</div>
			<div className="paragraph2">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
};

export default Home;
