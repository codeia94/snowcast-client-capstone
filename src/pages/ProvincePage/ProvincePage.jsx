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
			{/* <h2 className='province-title'>Provinces</h2> */}
			<div className='province-container'>
			{provinces.map((province) => {
				const provinceImageUrl = `http://localhost:8080/images/${province.province}.jpeg`

				return (
					<Link 
						to={`/province/${province.province}`} 
						className='province-card__link'
						key={province.province}
						style={{ backgroundImage: `url(${provinceImageUrl})`}} >
						<div className='province-card' key={province.province}>
							<h3 className='province-card__name'>{province.province}</h3>
						</div>
					</Link>
				);
			})}
			
			</div>
		</div>
	);
}


export default ProvincePage;