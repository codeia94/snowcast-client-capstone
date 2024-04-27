import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MountainList.scss';


function MountainList() {

	const [ mountains, setMountains ] = useState([]);
	const { province } = useParams();

	useEffect(() => {
		const fetchMountains = async () => {
			const response = await axios.get(`http://localhost:8080/api/province/${province}`);
			setMountains(response.data);
			console.log(response.data);
		};
		fetchMountains();
	},[province]);

	return (
		<div className='mountain'>
			<div className='mountain-container'>
				{mountains.map((mountain) => (
					<div className='mountain-card' key={mountain.id}>
						<h3 className='mountain-card__name'>{mountain.name}</h3>
						{/* <p className='mountain-card__details'>{mountain.name} is located in {mountain.province}.</p> */}
					</div>
				))}
			</div>
		</div>
	);
}


export default MountainList;