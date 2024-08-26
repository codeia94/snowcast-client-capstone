import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DayForecast.scss';


function DayForecast() {

	const { id } = useParams();
	const [ hourlyForecast, setHourlyForecast ] = useState(null);

	useEffect(() => {
		const fetchDayForecast = async () => {
			try {
				const response = await axios.get(`https://snowcast-server-df25b44e24b0.herokuapp.com/api/mountain/${id}`);
				setHourlyForecast(response.data.hourly);
			} catch (error) {
				console.error('Error fetching hourly data:', error);
			}
		};
		fetchDayForecast();
	}, [id]);
	
	return (
		<div className='dayForecast'>
			<div className='dayForecast-info'>
				<div className='dayForecast-info__label'>
					<p className='dayForecast-info__label-item'>Hour</p>
				</div>
				<div className='dayForecast-info__label'>
					<p className='dayForecast-info__label-item'>Snowfall</p>
					<p className='dayForecast-info__label-unit'>mm</p>
				</div>
				<div className='dayForecast-info__label'>
					<p className='dayForecast-info__label-item'>Feels Like</p>
					<p className='dayForecast-info__label-unit'>°C</p>
				</div>
				<div className='dayForecast-info__label'>
					<p className='dayForecast-info__label-item'>Temp</p>
					<p className='dayForecast-info__label-unit'>°C</p>
				</div>
				<div className='dayForecast-info__label'>
					<p className='dayForecast-info__label-item'>Wind</p>
					<p className='dayForecast-info__label-unit'>km/h</p>
				</div>
			</div>
			
			{hourlyForecast && hourlyForecast.slice(0, 24).map((forecast, index) => {
				const time = new Date(forecast.dt * 1000).toLocaleTimeString([],{ hour: 'numeric', minute: undefined, second: undefined });
				const { feels_like, temp, wind_speed, snow } = forecast;
				const snowfall = (snow && snow['1h']) || '0';
				const wind = (wind_speed*3.6).toFixed(2);
				return (
					<div key={index} className='dayForecast-container'>
						<div className='dayForecast-item hour-container'>
							<p className='dayForecast-item__value'>{time}</p>
						</div>
						<div className='dayForecast-item snow-container'>
							<p className='dayForecast-item__value'>{snowfall}</p>
						</div>
						<div className='dayForecast-item tempFeel-container'>
							<p className='dayForecast-item__value'>{feels_like}</p>
						</div>
						<div className='dayForecast-item temp-container'>
							<p className='dayForecast-item__value'>{temp}</p>
						</div>
						<div className='dayForecast-item wind-container'>
							<p className='dayForecast-item__value'>{wind}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}


export default DayForecast;