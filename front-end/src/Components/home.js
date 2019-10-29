import React, {useState} from 'react';
import CarPic from '../Images/Car.jpg'
import GhostTownPic1 from '../Images/ghostTownHome1.jpg'
import './home.scss'

const Home = props => {
        const credentials = {
            username: '',
            password: ''
		}
		
		const [register, setRegister] = useState(credentials)

		const handleChange = e => {
			e.persist()
			setRegister({
				...register,
				[e.target.name] : e.target.value
			})
		}

		const submitRegister = e => {
			e.preventDefault();
			// there should be an axios post request here
			setRegister(credentials)
			// props.history.psuh('/home')
		}


	return (
		<div className='Home'>
			<div className="top-content">
			<div className="titles">
				<h1>Welcome To Ghost Town Locator</h1>
                <h2>Midwest Edition</h2>
				<h2>The place to locate and share ghost towns around the midwest</h2>
			</div>

            <div className='signup'>
				<form className='form'>
					<h1>Register?</h1>
					<div className="form__group">
					<input 
					name="username"
					placeholder="username"
					value={register.username}
					onChange={handleChange}
					className="form__input"
					/>
					</div>

					<div className="form__group">
					<input
					name="password"
					placeholder="password"
					value={register.password}
					onChange={handleChange}
					className="form__input"
					/>
					</div>
					<div className="button-container">
						<button className='btn' type='button'>Register</button>
						<button className='btn' type='button'>Login</button>
						{/* login needs to have an onClick to route to /login */}
					</div>
				</form>
            </div>
			</div>

			<div className="paragraph1">
                <div className='paragraph-top'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
                </div>
                <div className='pics1'>
                <img src={CarPic} />
                <img src={GhostTownPic1}/>
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
