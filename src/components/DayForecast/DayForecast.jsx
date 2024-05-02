// import react from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './DayForecast.scss';



//this shows the day forecast
function DayForecast() {

	const { id } = useParams();
	// const [ dayForecast, setDayForecast ] = useState(null);
	const [ hourlyForecast, setHourlyForecast ] = useState(null);

	useEffect(() => {
		const fetchDayForecast = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/mountain/${id}`);
				setHourlyForecast(response.data.hourly);
				// console.log(response.data.hourly);
			} catch (error) {
				console.error('Error fetching hourly data:', error);
			}
		};
		fetchDayForecast();
	}, [id]);
	
	return (
		<div className='dayForecast'>
			<div className='dayForecast-info'>
				<h4 className='dayForecast-info__date'></h4>
				{/* <p className='dayForecast-info__summary'>test</p> */}
			</div>
			
			{hourlyForecast && hourlyForecast.slice(0, 24).map((forecast, index) => {
				const time = new Date(forecast.dt * 1000).toLocaleTimeString([],{ hour: 'numeric', minute: undefined, second: undefined });
				const { feels_like, temp, wind_speed, snow } = forecast || {};
				const snowfall = snow && snow['1h'] || '0';
				const wind = (wind_speed*3.6).toFixed(2);
				return (
					<div key={index} className='dayForecast-container'>
						{/* <div > */}
							<div className='dayForecast-item hour-container'>
								<p>{time}</p>
							</div>
							<div className='dayForecast-item snow-container'>
								<p>{snowfall}mm</p>
							</div>
							<div className='dayForecast-item temp-container'>
								<p>{temp}°C</p>
							</div>
							<div className='dayForecast-item tempFeel-container'>
								<p>{feels_like}°C</p>
							</div>
							<div className='dayForecast-item wind-container'>
								<p>{wind}km/h</p>
							</div>
							
						{/* </div> */}
					</div>
				);
			})}
		</div>
	);
}


export default DayForecast;