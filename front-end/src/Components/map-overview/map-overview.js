import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import axios from 'axios';

import marker from '../../Images/icons/locationMarker.svg';

import { axiosWithAuth } from '../utils/axiosWithAuth'

import './map-overview.scss';

const MapOverview = (props) => {
	const [ locations, setLocations ] = useState([]);

	useEffect(() => {
		getLocations();
	}, [])

	const getLocations = () => {
		axiosWithAuth()
		.get('/locations')
		.then(res => {
			console.log(res.data)
			setLocations(res.data);
		})
		.catch(err => console.log(err))
	}

	useEffect(() => {
		const listener = (e) => {
			if (e.key === 'Escape') {
				setSelectedLocation(null);
			}
		};
		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, []);

	const accessToken =
		'pk.eyJ1IjoiaXJpc2ppdG9tbzE0IiwiYSI6ImNrMnA1dGVhZzAwNzczbXFvdHUzM2VjZ3gifQ.yJH8NXyjTcEdqpgkM3xKfg';

	const [ viewPort, setViewPort ] = useState({
		latitude: 43.4113604,
		longitude: -106.2800242,
		width: '50vw',
		height: '50vh',
		zoom: 4
	});

	const [ selectedLocation, setSelectedLocation ] = useState(null);

	return (
		<div className="map">
			<h1>Map Overview</h1>
			<div className="map-and-legend">
				<div className="mapOverview">
					<ReactMapGl
						{...viewPort}
						mapboxApiAccessToken={accessToken}
						mapStyle="mapbox://styles/irisjitomo14/ck2p6xvlq1dl61cpbwjv2s7jo"
						onViewportChange={(viewport) => {
							setViewPort(viewport);
						}}
					>
						{locations.map((location) => {
							return (
								<Marker
									key={location.id}
									latitude={parseInt(location.latitude)}
									longitude={parseInt(location.longitude)}
								>
									<button
										className="marker-button"
										onClick={(e) => {
											e.preventDefault();
											setSelectedLocation(location);
										}}
									>
										<img src={marker} alt="location marker" />
									</button>
								</Marker>
							);
						})}

						{selectedLocation ? (
							<Popup
								latitude={parseInt(selectedLocation.latitude)}
								longitude={parseInt(selectedLocation.longitude)}
								onClose={() => {
									setSelectedLocation(null);
								}}
							>
								<div>
									<h2>{selectedLocation.location}</h2>
									<h4>{selectedLocation.description}</h4>
								</div>
							</Popup>
						) : null}
					</ReactMapGl>
				</div>
				<div className="legend">
					<h1>Legend</h1>
				</div>
			</div>
			<div>
				Icons made by{' '}
				<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
					Smashicons
				</a>{' '}
				from{' '}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</div>
	);
};

export default MapOverview;
