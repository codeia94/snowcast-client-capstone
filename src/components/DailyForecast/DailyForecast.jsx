import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './DailyForecast.scss';

function DailyForecast () {

	const { id } = useParams();
	const [ dailyForecast, setDailyForecast ] = useState(null);
	const [ description, setDescription ] = useState(null);
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	useEffect(() => {
		const fetchDailyForecast = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/mountain/${id}`);
				//Get daily forecast
				// console.log(response.data.daily);
				setDailyForecast(response.data.daily);
				//Get daily weather description
				// console.log(response.data.daily[0].weather);
				setDescription(response.data.daily[0].weather);
			} catch (error) {
				console.error('Error fetching daily data:', error);
			}
		};
		fetchDailyForecast();
	}, [id]);


	return (
		<div className='dailyForecast'>
			{dailyForecast && dailyForecast.slice(0, 5).map((forecast, index) => {
			const { summary } = forecast;
			const date = new Date(forecast.dt * 1000);
			const setDay = index === 0 ? 'Today' : days[date.getDay()];
			const minTemp = forecast.temp.min;
			const maxTemp = forecast.temp.max;
			const weatherIcon = forecast.weather[0].icon;
			const description = forecast.weather[0].description;
			const iconUrl = `http://localhost:8080/icons/${weatherIcon}.png`
				return (
					<div key={index} className='dailyForecast-info'>
						<h4 className='dailyForecast-info__date'>{setDay}</h4>
						<p className='dailyForecast-info__summary'>{summary}</p>
						{/* <div className='dailyForecast-info__details'> */}
							<img src={iconUrl} alt={description} className='dailyForecast-info__icon'/>
							<div className='dailyForecast-info__temp'>
								<p>{minTemp} °C / {maxTemp} °C</p>
							</div>
					
						{/* </div> */}
					</div>
				);
			})}
		</div>
	);
}

export default DailyForecast;