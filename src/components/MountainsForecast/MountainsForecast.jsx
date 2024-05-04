import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MountainsForecast.scss';

function MountainsForecast() {

	const [ mountainForecast , setMountainForecast ] = useState([]);
	const { province } = useParams();

	useEffect(() => {
		const fetchMountainForecast = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/mountain/province/${province}`);
				setMountainForecast(response.data);
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching mountain data:', error);
			}
		}
		fetchMountainForecast();
	}, [province])

	return (		
		<div className='mountainsForecast'>

			{mountainForecast.map((mountain) => {
				const temp = mountain.weather.current.temp;

			 
				return (
				<div key={mountain.id} className='mountainsForecast-list'>
					<h2 className='mountainsForecast-list__name'>{mountain.name}</h2>
					<p className='mountainsForecast-list__forecast'>{temp}</p>
				</div>
			);
			})}
		</div>
	);
}

export default MountainsForecast;