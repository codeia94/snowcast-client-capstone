import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
			} catch (error) {
				console.error('Error fetching mountain data:', error);
			}
		}
		fetchMountainForecast();
	}, [province])

	return (		
		<div className='mountainsForecast'>
			<div className='mountainsForecast-label'>
				<h3 className='mountainsForecast-label__item col-lg'></h3>
				<div className='mountainsForecast-label__item col-sm'>
					<h3 className='mountainsForecast-label__item-title'>Feels Like</h3>
					<p className='mountainsForecast-label__item-unit'>°C</p>
				</div>
				<div className='mountainsForecast-label__item col-sm'>
					<h3 className='mountainsForecast-label__item-title'>Temp</h3>
					<p className='mountainsForecast-label__item-unit'>°C</p>
				</div>
				<div className='mountainsForecast-label__item col-sm'>
					<h3 className='mountainsForecast-label__item-title'>Wind</h3>
					<p className='mountainsForecast-label__item-unit'>km/h</p>
				</div>
			</div>

			{mountainForecast.map((mountain) => {
				console.log(mountain);
				const temp = mountain.weather.current.temp;
				const tempFeel = mountain.weather.current.feels_like;
				const wind = (mountain.weather.current.wind_speed*3.6).toFixed(2);

				return (
				<div key={mountain.id} className='mountainsForecast-list'>
					<Link to={`/province/${province}/${mountain.mountain_id}`} className='mountainsForecast-list__name col-lg'>{mountain.name}</Link>
					<p className='mountainsForecast-list__item col-sm'>{tempFeel}</p>
					<p className='mountainsForecast-list__item col-sm'>{temp}</p>
					<p className='mountainsForecast-list__item col-sm'>{wind}</p>
				</div>
			);
			})}
		</div>
	);
}

export default MountainsForecast;