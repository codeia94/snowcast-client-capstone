import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './DailyForecast.scss';

function DailyForecast () {

	const { id } = useParams();
	const [ dailyForecast, setDailyForecast ] = useState(null);


	useEffect(() => {
		const fetchDailyForecast = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/mountain/${id}`);
				console.log(response.data.daily);
				setDailyForecast(response.data.daily);
			} catch (error) {
				console.error('Error fetching daily data:', error);
			}
		};
		fetchDailyForecast();
	}, [id]);


	// {dailyForecast && dailyForecast.slice(0, 4).map((forecast, index) => {
	
	// 	const { summary, snow, temp, weather } = forecast || {};
	// 	const date = new Date(forecast.dt * 1000).toLocaleDateString();

		return (
			<div className='dailyForecast'>
				{/* <p>DailyForecast</p> */}
				<div className='dailyForecast-info'>
					<h4 className='dailyForecast-info__date'>123</h4>
					<p className='dailyForecast-info__summary'>summary</p>
				</div>
			</div>
		);
};


export default DailyForecast;