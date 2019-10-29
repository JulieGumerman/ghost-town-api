import React from 'react';
import CarPic from '../Images/Car.jpg'
import GhostTownPic1 from '../Images/ghostTownHome1.jpg'
import './home.scss'

const Home = () => {
	return (
		<div className='Home'>
			<div className="titles">
				<h1>Welcome To Ghost Town Locator</h1>
                <h2>Midwest Edition</h2>
				<h2>The place to locate and share ghost towns around the midwest</h2>
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
