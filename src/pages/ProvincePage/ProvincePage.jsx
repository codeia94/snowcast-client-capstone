import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProvincePage.scss';


function ProvincePage() {

	const [provinces, setProvinces] = useState([]);

	useEffect(() => {
		const fetchProvinces = async () => {
			const response = await axios.get('http://localhost:8080/api/province');
			setProvinces(response.data);
			// console.log(response.data);
		};
	fetchProvinces();	
	}, []);

	return (
		<div className='province'>
			<h2 className='province-title'>Provinces</h2>
			<div className='province-container'>
			{provinces.map((province) => (
				<Link to={`/province/${province.province}`} className='province-card__link'key={province.province}>
					<div className='province-card' key={province.province}>
						<h3 className='province-card__name'>{province.province}</h3>
						{/* <p className='province-card__details'>{province.province} is home to some of the best skiing in the world.</p> */}
					</div>
				</Link>
			))}
			</div>
		</div>
	);
}


export default ProvincePage;