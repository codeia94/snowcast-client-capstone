// import react from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './DayForecast.scss';



//this shows the day forecast
function DayForecast() {

	const { id } = useParams();
	const [ dayForecast, setDayForecast ] = useState(null);
	const [ hourlyForecast, setHourlyForecast ] = useState(null);

	useEffect(() => {
		const fetchDayForecast = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/mountain/${id}`);
				console.log(response.data);
				setDayForecast(response.data.daily[0]);
				setHourlyForecast(response.data.hourly);
				console.log(response.data.hourly);
			} catch (error) {
				console.error('Fetch error:', error);
			}
		};
		fetchDayForecast();
	}, [id]);



	const { dt, summary, clouds, snow, temp, wind__speed } = dayForecast || {};
	const date = new Date(dt * 1000).toLocaleDateString();
	const { hdt, hclouds, htemp, hwind__speed, hsnow } = hourlyForecast || {};
	const time = new Date(hdt * 1000).toLocaleTimeString();

	return (
		<div className='dayForecast'>
			<div className='dayForecast-info'>
				<h4 className='dayForecast-info__date'>{date}</h4>
				<p className='dayForecast-info__summary'>{summary}</p>
			</div>
			
			<div className='dayForecast-container'>
				{hourlyForecast.slice(0, 24).map((hourlyForecast) => (

				<div className='dayForecast-item hour-container'>
					<p></p>
				</div>
				<div className='dayForecast-item snow-container'>
					<p>Snowmm</p>
				</div>
				<div className='dayForecast-item temp-container'>

				</div>
				<div className='dayForecast-item condition-container'></div>
				
				))}
			</div>
		</div>
	);
}


export default DayForecast;