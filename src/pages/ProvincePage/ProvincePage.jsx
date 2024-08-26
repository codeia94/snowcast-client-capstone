import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProvincePage.scss';


function ProvincePage() {

	const [provinces, setProvinces] = useState([]);

	useEffect(() => {
		const fetchProvinces = async () => {
			const response = await axios.get('https://snowcast-server-df25b44e24b0.herokuapp.com/api/province');
			setProvinces(response.data);
			console.log(response.data);
		};
	fetchProvinces();	
	}, []);

	return (
		<div className='province'>
			<div className='province-container'>
			{provinces.map((province) => {
				const provinceImageUrl = `https://snowcast-server-df25b44e24b0.herokuapp.com/images/${province.province}.jpeg`

				return (
					<Link 
						to={`/province/${province.province}`} 
						className='province-card__link'
						key={province.province}j
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